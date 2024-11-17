import { ScrollView, View, Image, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from '../styles/messagescreen';
import searchIcon from '../constants/searchIcon.png'
import MessageList from '../components/messageList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { useEffect, useState } from 'react';
import { signInPayOS } from "@/api/payos";

const MessageScreen = () => {
  const [error, setError] = useState(null);

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      handleLogin();
    }
  }, [fontsLoaded]);

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
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      setError(error.message);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.viewContainer}>
          <View style={styles.firstLayer}>
            <Text style={styles.titleMessage}>
              Transaction List
            </Text>

            <Image style={styles.findMessage}
              source={searchIcon}
              resizeMode='cover'
            />
          </View>

          <MessageList />
        </View>
    </SafeAreaView>
  )
}

export default MessageScreen
