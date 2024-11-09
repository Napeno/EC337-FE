import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function QRCodeScreen({ route }) {
    const { qrDataURL } = route.params; // Retrieve the QR code data URL
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `${qrDataURL}` }}
                style={styles.qrImage}
            />
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
    qrImage: {
        width: 500,
        height: 600,
    },
});
