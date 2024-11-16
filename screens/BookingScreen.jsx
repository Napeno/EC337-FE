import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { CameraView, Camera } from "expo-camera";
import { getProductByBarcode } from '@/api/product';
import styles from '../styles/bookingScreen'


export default function BookingScreen({ navigation }) {
    const [formData, setFormData] = useState([]);
    const scanningRef = useRef(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const scanLineAnimation = useRef(new Animated.Value(0)).current;
    const [timeLeft, setTimeLeft] = useState(2400); 

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getCameraPermissions();

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        // Hiệu ứng chạy của thanh quét
        startScanLineAnimation();

        return () => clearInterval(timer);
    }, []);

    const startScanLineAnimation = () => {
        scanLineAnimation.setValue(0);
        Animated.loop(
            Animated.timing(scanLineAnimation, {
                toValue: 1,
                duration: 2500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    };

    const scanLineTranslateY = scanLineAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 400],
    });

    const handleBarcodeScanned = async ({ type, data }) => {
        if (scanningRef.current) return;

        scanningRef.current = true;
        setScanned(true);

        try {
            const response = await getProductByBarcode(data);
            console.log(response);
            setFormData((prevFormData) => [...prevFormData, response]);
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            setTimeout(() => {
                scanningRef.current = false;
            }, 1500);
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {/* Camera view with barcode scanning */}
            <View style={styles.cameraWrapper}>
                <CameraView
                    onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
                    barcodeScannerSettings={{
                        barcodeTypes: ["code128"],
                    }}
                    style={styles.camera}
                />
               <Image
                    source={require('../constants/barcodescan.png')}
                    style={styles.avatar}
                    resizeMode='contain'
                />
                 <View style={styles.overlay}>
                <View style={styles.scanBox}>
                    <Animated.View
                        style={[
                            styles.scanLine,
                            { transform: [{ translateY: scanLineTranslateY }] },
                        ]}
                    />
                </View>
            </View>

            </View>

            {scanned && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setFormData([])}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                        <Text style={styles.buttonText}>Scan Again</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('ProductDetail', { formData })}
                    >
                        <Text style={styles.buttonText}>Go to Product Detail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('PaymentScreen', { formData })}
                    >
                        <Text style={styles.buttonText}>Go to Payment</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
