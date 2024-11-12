import React, { useState } from 'react';
import {View, TextInput, Button, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {getStaticQR} from "../api/vietqr";

const CreateQRScreen = () => {
    const [accountNo, setAccountNo] = useState('');
    const [accountName, setAccountName] = useState('');
    const [acqId, setAcqId] = useState('');
    const [amount, setAmount] = useState('');
    const [addInfo, setAddInfo] = useState('');
    const [qrCodeData, setQrCodeData] = useState<string | null>(null);

    const handleGenerateQrCode = async () => {
        const totalAmount = parseFloat(amount);
        const formDataToSend = {
            accountNo,
            accountName,
            acqId: parseInt(acqId),
            amount: Math.round(totalAmount * 10000), // Ví dụ nhân với 10000 để chuyển sang đơn vị nhỏ hơn
            addInfo,
            template: 'compact2'
        };

        try {
            const response = await getStaticQR(formDataToSend);
            setQrCodeData(response.data?.qrDataURL);
        } catch (error) {
            console.error('Error generating QR code', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Tạo Mã QR Thanh Toán</Text>

            <TextInput
                style={styles.input}
                placeholder="Số tài khoản"
                value={accountNo}
                onChangeText={setAccountNo}
            />
            <TextInput
                style={styles.input}
                placeholder="Tên chủ tài khoản"
                value={accountName}
                onChangeText={setAccountName}
            />
            <TextInput
                style={styles.input}
                placeholder="Mã đơn vị thu"
                value={acqId}
                keyboardType="numeric"
                onChangeText={setAcqId}
            />
            <TextInput
                style={styles.input}
                placeholder="Số tiền"
                value={amount}
                keyboardType="numeric"
                onChangeText={setAmount}
            />
            <TextInput
                style={styles.input}
                placeholder="Thông tin bổ sung"
                value={addInfo}
                onChangeText={setAddInfo}
            />

            <Button title="Tạo Mã QR" onPress={handleGenerateQrCode} />

            {qrCodeData ? (
                <View style={styles.container}>
                    <Image
                        source={{ uri: qrCodeData }}
                        style={styles.qrImage}
                    />
                </View>
            ) : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 5,
    },
    qrCodeContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
    },
});

export default CreateQRScreen;
