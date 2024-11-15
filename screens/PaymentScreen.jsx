const { useState, useEffect } = require('react');

import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import {createPayment} from "../api/payos";
import { sha256 } from 'js-sha256';

export default function PaymentScreen({navigation, route }) {
    const { formData = [] } = route.params;
    const [orderId, setOrderId] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    let cancelUrl = process.env.EXPO_PUBLIC_CANCEL_URL;
    let returnUrl = process.env.EXPO_PUBLIC_RETURN_URL;
    let checkSumKey = process.env.EXPO_PUBLIC_CHECKSUM_KEY;

    const [item, setItem] = useState({
        name: '',
        price: '',
    });
    // console.log(formData);

    function generateOrderId() {
        return Math.floor(100000000 + Math.random() * 900000000);
    }

    const handleGenerateNumber = () => {
        setOrderId(generateOrderId());
    };

    function encryptSHA256({ amount, cancelUrl, description, orderCode, returnUrl }, checkSumKey) {
        const plainText = `amount=${amount}&cancelUrl=${cancelUrl}&description=${description}&orderCode=${orderCode}&returnUrl=${returnUrl}`;
        const hash = sha256.hmac(checkSumKey, plainText);
        return hash;
    }

    useEffect(() => {
        if (Array.isArray(formData)) {
            const newItems = formData.map((product) => ({
                name: product.name,
                price: Math.round(product.price),
            }));
            const calculatedTotal = newItems.reduce((sum, product) => sum + product.price, 0);

            setItem(newItems);
            setTotalAmount(calculatedTotal);
            console.log("Total Amount:", calculatedTotal);
            console.log("Items:", newItems);
        }
    }, [formData]);


    return (
        <>
        <ScrollView contentContainerStyle={styles.container}>
            {Array.isArray(formData) &&
                formData.map((product, index) => (
                    <View key={index} style={styles.productContainer}>
                        <Text style={styles.title}>{product.name}</Text>
                        <Image source={{ uri: product.imageUrl }} style={styles.image} />
                        <Text>Product Price: {product.price}</Text>
                    </View>
                ))}
            <Button
                title="Generate QR code"
                onPress={async () => {
                    try {
                        console.log("Button pressed");

                        const generatedOrderId = generateOrderId();
                        const currentTimestamp = Math.floor(Date.now() / 1000);
                        const timestamp = currentTimestamp + 120;

                        const encryptedText = encryptSHA256({
                            amount: totalAmount,
                            cancelUrl: cancelUrl,
                            description: 'Thanh toán tại EC337',
                            orderCode: generatedOrderId,
                            returnUrl: returnUrl
                        }, checkSumKey);

                        console.log("Encrypted Text:", encryptedText);

                        const formDataToSend = {
                            orderCode: generatedOrderId,
                            description: 'Thanh toán tại EC337',
                            item: item,
                            cancelUrl: cancelUrl,
                            returnUrl: returnUrl,
                            expiredAt: timestamp,
                            amount: totalAmount,
                            signature: encryptedText
                        };
                        console.log("Form Data:", formDataToSend);

                        const result = await createPayment(formDataToSend);
                        if (result) {
                            console.log(result);
                            navigation.navigate('QRPaymentScreen', { result: result });
                        } else {
                            console.log('Payment request failed');
                        }
                    } catch (error) {
                        console.error("Error in onPress handler:", error);
                    }
                }}

            />
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
    },
    productContainer: {
        marginBottom: 24,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
});
