import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image, Animated} from 'react-native';
import { CameraView, Camera } from "expo-camera";
import { getProductByBarcode } from '@/api/product';
import styles from '../styles/bookingScreen';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { useAnimatedStyle, withSpring, Easing } from 'react-native-reanimated';
import Cart from '../components/cartItem';

export default function BookingScreen({ navigation }) {
    const [formData, setFormData] = useState([
    ]);
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

        startScanLineAnimation();

        return () => clearInterval(timer);
    }, []);

    const [drawerHeight, setDrawerHeight] = useState(new Animated.Value(90));

    const openDrawer = () => {
        Animated.spring(drawerHeight, {
            toValue: 700,
            duration: 400,
            useNativeDriver: false,
            stiffness: 50,
            damping: 25,
        }).start();
    };

    const closeDrawer = () => {
        Animated.spring(drawerHeight, {
            toValue: 90,
            duration: 400,
            useNativeDriver: false,
            stiffness: 50,
            damping: 25,
        }).start();
    };

    const drawerStyle = {
        height: drawerHeight,
        transform: [
            {
                translateY: drawerHeight.interpolate({
                    inputRange: [0, 300],
                    outputRange: [0, 0],
                }),
            },
        ],
    };

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

    // Function to calculate the total price
    const calculateTotalPrice = () => {
        return formData.reduce((total, item) => total + item.price, 0);
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

            <Animated.View style={[styles.drawer, drawerStyle]}>
                <GestureHandlerRootView>
                    <PanGestureHandler
                        onGestureEvent={(event) => {
                            if (event.nativeEvent.translationY < 0) {
                                openDrawer();
                            } else {
                                closeDrawer();
                            }
                        }}
                    >
                        <View style={styles.drawerContent}>
                            <Image
                                source={require('../constants/button_expand.png')}
                                style={styles.button_expand}
                                resizeMode="contain"
                            />
                            <View style={styles.wrapContent}>
                                <View style={styles.wrapHeader}>
                                    <View style={styles.leftContent}>
                                        <View style={styles.wrapHeaderContent}>
                                            <Image
                                                source={require('../constants/cart_icon.png')}
                                                style={styles.cart_icon}
                                                resizeMode="contain"
                                            />
                                            <Text style={styles.drawerHeader}>My Cart</Text>
                                        </View>
                                        <Text style={styles.drawerItem}>3 items</Text>
                                    </View>
                                    <Text style={styles.cashHeader}>2000 VND</Text>
                                </View>

                                <View style={styles.divider} />

                                <Cart formData={formData} style={styles.cartView}/>

                                <View style={styles.bottomWrap}>
                                    <View style={styles.totalWrap}>
                                        <Text style={styles.totalText}>Total</Text>
                                        <Text style={styles.drawerHeader}>2000 VND</Text>
                                    </View>
                                    <TouchableOpacity style={styles.buttonPayment}
                                    onPress={() => navigation.navigate('PaymentScreen', { formData })}>
                                        <Text style={styles.buttonText}>Go to Payment</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </PanGestureHandler>
                </GestureHandlerRootView>
            </Animated.View>

        </View>
    );
}
