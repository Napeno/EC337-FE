import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { getStaticQR } from "../api/vietqr";
import styles from '../styles/createQR'

const CreateQRScreen = ({navigation}) => {
    const [accountNo, setAccountNo] = useState('');
    const [accountName, setAccountName] = useState('');
    const [acqId, setAcqId] = useState('');
    const [amount, setAmount] = useState('');
    const [addInfo, setAddInfo] = useState('');
    const [qrCodeData, setQrCodeData] = useState(null);
    const [bin, setBin] = useState(null);
    const [selectedLogo, setSelectedLogo] = useState(null); 

    const handleGenerateQrCode = async () => {
        const totalAmount = parseFloat(amount);
        const formDataToSend = {
            accountNo,
            accountName,
            acqId: bin,
            amount: Math.round(totalAmount),
            addInfo,
            template: 'compact2'
        };

        try {
            const response = await getStaticQR(formDataToSend);
            setQrCodeData(response.data?.qrDataURL);
            navigation.navigate('QRCodeScreen', { qrDataURL: response.data?.qrDataURL });
        } catch (error) {
            console.error('Error generating QR code', error);
        }
    };

    const handleLogoClick = (value) => {
        setBin(value);
        setSelectedLogo(value);
        console.log(value)
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Tạo Mã QR Thanh Toán</Text>

            <TextInput
                style={styles.input}
                placeholder="Số tài khoản"
                value={accountNo}
                onChangeText={setAccountNo}
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Tên chủ tài khoản"
                value={accountName}
                onChangeText={setAccountName}
                placeholderTextColor="#aaa"
            />
            <View style={styles.containerQR}>
                <View style={styles.rowQR}>
                    <TouchableOpacity
                        onPress={() => handleLogoClick(970416)}
                        style={[
                            styles.logoWrapper,
                            selectedLogo === 970416 && styles.selectedLogo,
                        ]}
                    >
                        <Image
                            source={require('../constants/logo-ngan-hang-ACB-PNG.png')}
                            style={styles.logoBank}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleLogoClick(970403)}
                        style={[
                            styles.logoWrapper,
                            selectedLogo === 970403 && styles.selectedLogo,
                        ]}
                    >
                        <Image
                            source={require('../constants/logo-ngan-hang-Sacombank-01.png')}
                            style={styles.logoBank}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleLogoClick(970436)}
                        style={[
                            styles.logoWrapper,
                            selectedLogo === 970436 && styles.selectedLogo,
                        ]}
                    >
                        <Image
                            source={require('../constants/Vietcombank-01.png')}
                            style={styles.logoBank}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.rowQR}>
                    <TouchableOpacity
                        onPress={() => handleLogoClick(970418)}
                        style={[
                            styles.logoWrapper,
                            selectedLogo === 970418 && styles.selectedLogo,
                        ]}
                    >
                        <Image
                            source={require('../constants/BIDV-01.png')}
                            style={styles.logoBank}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleLogoClick(970429)}
                        style={[
                            styles.logoWrapper,
                            selectedLogo === 970429 && styles.selectedLogo,
                        ]}
                    >
                        <Image
                            source={require('../constants/SCB logo-01.png')}
                            style={styles.logoBank}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleLogoClick(970407)}
                        style={[
                            styles.logoWrapper,
                            selectedLogo === 970407 && styles.selectedLogo,
                        ]}
                    >
                        <Image
                            source={require('../constants/Techcombank-01.png')}
                            style={styles.logoBank}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Số tiền"
                value={amount}
                keyboardType="numeric"
                onChangeText={setAmount}
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Thông tin bổ sung"
                value={addInfo}
                onChangeText={setAddInfo}
                placeholderTextColor="#aaa"
            />

            <TouchableOpacity style={styles.button} onPress={handleGenerateQrCode}>
                <Text style={styles.buttonText}>Tạo Mã QR</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default CreateQRScreen