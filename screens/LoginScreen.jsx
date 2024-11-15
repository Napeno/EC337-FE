import React, { useState, useRef } from 'react';
import { ScrollView, View, Image, Text, TextInput, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInPayOS } from "@/api/payos";
import { signInWithEmailAndPassword, PhoneAuthProvider, signInWithCredential, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../firebase';
import styles from '../styles/loginscreen';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber] = useState('+84 3673306824'); // Mặc định là +84 3673306824
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState('');

  const handleHome = () => {
    navigation.navigate("MAIN");
  };

  const sendOTP = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber);
      setVerificationId(verificationId);
      Alert.alert('Thành công', `OTP đã được gửi đến số điện thoại ${phoneNumber}`);
    } catch (error) {
      console.error('Lỗi khi gửi OTP:', error);
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    const requestBody = {
      email: process.env.EXPO_PUBLIC_EMAIL,
      password: process.env.EXPO_PUBLIC_PASSWORD,
    };

    try {
      const response = await signInPayOS(requestBody);
      const token = response.data.token;

      if (token) {
        await AsyncStorage.setItem('authToken', token);
        console.log('Token đã lưu:', token);
        handleHome();
        sendOTP();
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      setError(error.message);
    }
  };

  const handleVerifyOTP = async () => {
    if (!verificationId || !otp) {
      Alert.alert('Lỗi', 'Vui lòng nhập mã OTP');
      return;
    }

    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      Alert.alert('Xác thực thành công', 'Bạn đã đăng nhập thành công');
      handleHome();
    } catch (error) {
      console.error('Lỗi khi xác thực OTP:', error);
      setError(error.message);
    }
  };

  return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.viewContainer}>
            <Image
                source={require('../constants/ladago.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <View style={styles.viewForm}>
              <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
              />
              <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
              />
            </View>
            <View style={styles.interact_btn}>
              <Pressable style={styles.loginScreenButton} onPress={handleLogin}>
                <Text style={styles.login_btn}>
                  Login
                </Text>
              </Pressable>
              <Text style={{ textAlign: 'center', marginBottom: 16, fontFamily: 'Quicksand_500Medium' }}>Or</Text>
              <Pressable style={styles.registerScreenButton}>
                <Text style={styles.register_btn}>
                  Register
                </Text>
              </Pressable>
            </View>
            <View style={styles.other_login}>
              <Text style={{ textAlign: 'center', marginBottom: 32, fontFamily: 'Quicksand_500Medium', }}>-Or sign in with-</Text>
              <View style={styles.icon_login}>
                <Image
                    style={styles.icon}
                    source={require('../constants/google_icon.png')}
                    resizeMode='contain'
                />
                <Image
                    style={styles.icon_apple}
                    source={require('../constants/apple_icon.png')}
                    resizeMode='contain'
                />
                <Image
                    style={styles.icon_phone}
                    source={require('../constants/phone_icon.png')}
                    resizeMode='contain'
                />
              </View>
            </View>
            <Pressable style={styles.sendOtpButton} onPress={sendOTP}>
              <Text style={styles.sendOtpText}>Send OTP</Text>
            </Pressable>
            <TextInput
                style={styles.textInput}
                placeholder="Enter OTP"
                keyboardType="number-pad"
                value={otp}
                onChangeText={setOtp}
            />
            <Pressable style={styles.verifyOtpButton} onPress={handleVerifyOTP}>
              <Text style={styles.verifyOtpText}>Verify OTP</Text>
            </Pressable>
          </View>

        </ScrollView>
      </SafeAreaView>
  );
};

export default LoginScreen;
