import { ScrollView, View, Image, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from '../styles/favoritescreen';
import FavoriteList from '../components/favoriteList';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

const FavoriteScreen = () => {

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
          <Text style={styles.titleFavorite}>
            Favorite List
          </Text>

          <View style={styles.filterWrap}>
            <Pressable style={styles.filterBtn}>
              <Text style={styles.filterText}>
                Date - Visitor
              </Text>
            </Pressable>
            <Pressable style={styles.filterBtn}>
              <Text style={styles.filterText}>
                Share
              </Text>
            </Pressable>
          </View>


          <FavoriteList />
        </View>
    </SafeAreaView>
  )
}

export default FavoriteScreen
