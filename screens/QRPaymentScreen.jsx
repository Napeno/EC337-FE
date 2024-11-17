import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Client } from '@stomp/stompjs';
import {getPaymentStatus} from "@/api/payos";
import * as Speech from 'expo-speech';
import styles from '../styles/qrpayment'
import LinearGradient from 'react-native-linear-gradient';

export default function QRPaymentScreen({ route, navigation }) {
    const { result } = route.params; // Receive plain text QR data from props
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [isPaidHandled, setIsPaidHandled] = useState(false);

    const options = {
        language: 'vi',
    };

    const extractNameAndBank = (input: string) => {
        const parts = input.split(' ');

        const nameAndBank = parts.slice(-5).join(' ');

        return nameAndBank;
    };

    const getStatus = async () => {
        try {
            const response = await getPaymentStatus(result.data?.orderCode);

            if (response?.data?.status === 'PAID' && !isPaidHandled) {
                const infoBank = extractNameAndBank(response?.data?.transactions[0]?.description);
                const amount = response?.data?.amount;
                Speech.speak(`Thanh toán thành công với số tiền là ${amount} đồng tới tài khoản ${infoBank}`, options);
                setPaymentStatus(true);
                setIsPaidHandled(true);
            }
        } catch (error) {
            console.error('Error fetching payment status:', error);
        }
    };

    useEffect(() => {
        getStatus();

        const interval = setInterval(() => {
            getStatus();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const client = new Client({
            brokerURL: 'ws://192.168.1.17:8080/webhook/payment-success', // WebSocket endpoint
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
                // console.error('STOMP error:', error);
            },
            onWebSocketError: (error) => {
                // console.error('WebSocket connection error:', error); // Detailed WebSocket error logging
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
            <Text style={styles.title}>Thông Tin Thanh Toán</Text>

            {result?.data?.qrCode ? (
                <View style={styles.card}>
                    <View style={styles.qrWrapper}>
                        <View style={styles.qrBorder}>
                            <QRCode
                                value={result.data.qrCode} // Plain text for the QR code
                                size={300}
                            />
                        </View>
                    </View>

                    <View style={styles.infoContainer}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Tên tài khoản:</Text>
                            <Text style={styles.value}>{result.data?.accountName}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Số tài khoản:</Text>
                            <Text style={styles.value}>{result.data?.accountNumber}</Text>
                        </View>
                        <View style={[styles.row, {marginBottom: 0}]}>
                            <Text style={styles.label}>Số tiền:</Text>
                            <Text style={styles.value}>{Math.round(result.data?.amount).toLocaleString('vi-VN')} VND</Text>
                        </View>
                    </View>
                </View>
            ) : (
                <Text style={styles.noQRText}>Không có mã QR để hiển thị</Text>
            )}
                <Text style={[paymentStatus? styles.statusPaid : styles.status]}>
                    {paymentStatus ? "Đã thanh toán" : "Chờ thanh toán"}
                </Text>
            
            {
                paymentStatus? (
                    <View>
                        <TouchableOpacity style={styles.buttonPayment}
                            onPress={() => navigation.navigate('MAIN')}>
                                <Text style={styles.buttonText}>Go back Home</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View></View>
                )
            }
        </View>
    );
}
