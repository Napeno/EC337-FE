import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { requestMoMoPayment } from '@/api/momo';
import { getStaticQR } from "@/api/vietqr";

export default function ProductDetailScreen({ navigation, route }) {
    const { formData = [] } = route.params;
    let totalAmount = formData.reduce((accum, product) => accum + product.price, 0);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Array.isArray(formData) && formData.map((product, index) => (
                <View key={index} style={styles.productContainer}>
                    <Image source={{ uri: product.imageUrl }} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{product.name}</Text>
                        <Text style={styles.price}>Giá: {product.price} VND</Text>
                    </View>
                </View>
            ))}
            <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                    const formDataToSend = {
                        accountNo: '1023189148',
                        accountName: 'NGUYEN SON HA',
                        acqId: 970436,
                        amount: Math.round(totalAmount),
                        addInfo: 'Thanh toán tại EC337',
                        template: 'compact2',
                    };
                    const result = await getStaticQR(formDataToSend);
                    if (result) {
                        navigation.navigate('QRCodeScreen', { qrDataURL: result.data?.qrDataURL });
                    } else {
                        console.log('Payment request failed');
                    }
                }}
            >
                <Text style={styles.buttonText}>Tạo mã QR thanh toán</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    productContainer: {
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
        borderRadius: 16,
        padding: 12,
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 12,
        marginRight: 12,
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        color: '#939393',
    },
    button: {
        backgroundColor: '#939393',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 24,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
