import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, Alert,TouchableOpacity } from 'react-native';
import { CameraView, Camera } from "expo-camera";
import {getProductByBarcode} from '@/api/product'

export default function BookingScreen({ navigation }) {
    const [formData, setFormData] = useState({
        barcode: '',
        createdAt: '',
        imageUrl: '',
        name: '',
        price: '',
        productId: '',
        updatedAt: '',
    });
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const handleBarcodeScanned = async ({ type, data }) => {
        setScanned(true);
        const response = await getProductByBarcode(data);
        console.log(response);
        setFormData((prevFormData) => {
            return Array.isArray(prevFormData) ? [...prevFormData, response] : [response];
        });
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <CameraView
                onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["code128", "ean13", "ean8", "upc_a", "upc_e"],
                }}

                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                <>
                    <Button title="Reset product" onPress={() => setFormData([])} />
                    <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
                    <Button
                        title="Go to Product Detail"
                        onPress={() => navigation.navigate('ProductDetail', { formData })}
                    />
                    <Button
                        title="Go to Payment"
                        onPress={() => navigation.navigate('PaymentScreen', { formData })}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

