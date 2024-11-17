const { useState, useEffect } = require('react');
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable, SafeAreaView} from 'react-native';
import { createPayment } from "../api/payos";
import { sha256 } from 'js-sha256';
import styles from '../styles/payment'

export default function PaymentScreen({ navigation, route }) {
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

    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () => {
        setQuantity(prev => prev + 1)
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

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
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.viewContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>
                    Checkout List
                </Text>
                <View style={styles.productList}>
                    {Array.isArray(formData) &&
                        formData.map((product, index) => (
                            <View key={index} style={styles.cartItemContainer}>
                            <Image
                                source={{ uri: product.imageUrl }}
                                style={styles.productImage}
                                resizeMode='repeat'
                            />
                            <View style={styles.detailsContainer}>
                                <View style={styles.productInfoContainer}>
                                    <Text style={styles.productName}>{product.name}</Text>
                                    <Text style={styles.productPrice}>{Math.round(product.price).toLocaleString('vi-VN')} VND</Text>
                                    <View style={styles.quantityContainer}>
                                        <Pressable style={styles.quantityButton} onPress={handleDecrease}>
                                            <Text style={styles.quantityButtonText}>-</Text>
                                        </Pressable>
                                        <Text style={styles.quantityText}>{quantity}</Text>
                                        <Pressable style={styles.quantityButton} onPress={handleIncrease}>
                                            <Text style={styles.quantityButtonText}>+</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <Text style={styles.totalPrice}>{Math.round(product.price).toLocaleString('vi-VN')} VND</Text>
                            </View>
                        </View>
                        ))}
                </View>
            </ScrollView>
            <View style={styles.bottomWrap}>
                    <View style={styles.totalWrap}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.drawerHeader}>{Math.round(totalAmount).toLocaleString('vi-VN')} VND</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonPayment}
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
                        >
                            <Text style={styles.buttonText}>Go to Payment</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        </>
    );
}
