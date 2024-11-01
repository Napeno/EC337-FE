import { ScrollView, View, Image, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from '../styles/messagescreen';
import searchIcon from '../constants/searchIcon.png'
import MessageList from '../components/messageList';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { Filter } from 'react-native-svg';

const MessageScreen = () => {

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
        <View style={styles.viewContainer}>
          <View style={styles.firstLayer}>
            <Text style={styles.titleMessage}>
              Message List
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
