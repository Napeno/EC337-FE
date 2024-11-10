import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Client } from '@stomp/stompjs';

export default function QRPaymentScreen({ route }) {
    const { result } = route.params; // Receive plain text QR data from props
    const [paymentStatus, setPaymentStatus] = useState("Pending");

    useEffect(() => {
        const client = new Client({
            brokerURL: 'ws://192.168.1.74:8080/api/payment-status', // WebSocket endpoint
            onConnect: () => {
                console.log('Connected to WebSocket');
                client.subscribe('/topic/payment-status', (message) => {
                    const data = JSON.parse(message.body);
                    console.log('Received message:', data); // Log the message
                    if (data.status) {
                        setPaymentStatus(data.status);
                    }
                });
            },
            onStompError: (error) => {
                console.error('STOMP error:', error);
            },
            onWebSocketError: (error) => {
                console.error('WebSocket connection error:', error); // Detailed WebSocket error logging
            },
        });

        // Connect to WebSocket
        client.activate();

        // Cleanup on unmount
        return () => {
            client.deactivate();
        };
    }, []);


    return (
        <View style={styles.container}>
            {result?.data?.qrCode ? (
                <View style={styles.qrContainer}>
                    <QRCode
                        value={result.data.qrCode} // Plain text for the QR code
                        size={300}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{result.data?.accountName}</Text>
                        <Text style={styles.text}>{result.data?.accountNumber}</Text>
                        <Text style={styles.text}>{result.data?.amount}</Text>
                    </View>

                    <Text>Payment Status: {paymentStatus}</Text>
                </View>
            ) : (
                <Text>Không có mã QR để hiển thị</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    qrContainer: {
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 16,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 4,
    },
});