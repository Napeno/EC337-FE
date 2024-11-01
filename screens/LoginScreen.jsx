// LoginScreen.js
import { ScrollView, View, Image, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/loginscreen';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleHome = () => {
    navigation.navigate("MAIN");
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.replace('MAIN');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

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
            <Text style={styles.titleForm}>
              Log in to LADAGO
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor="gray"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Text style={styles.forgetPassword}>Forget password?</Text>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
