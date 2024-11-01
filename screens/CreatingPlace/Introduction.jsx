import { ScrollView, View, Image, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/CreatingPlace/introduction';
import house from '../../constants/3dhouse.png'
import close from '../../constants/close.png'
import BottomTabCreate from '../../components/bottomTabCreate'
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { Filter } from 'react-native-svg';

const Introduction = ({navigation}) => {

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

  const backNav = "CREATE";
  const nextNav = "STEPONE";

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.viewContainer}>
          <Image
                style={styles.closeIcon}
                source={close}
                resizeMode='cover'
              />

          <Image
                style={styles.house}
                source={house}
                resizeMode='cover'
              />

          <Text style={styles.titleStep}>
            Step 1
          </Text>

          <Text style={styles.titleInfo}>
            Share information about your place
          </Text>

          <Text style={styles.description}>
            In this step, we’ll ask you to specify the type of 
            accommodation you’re offering and whether guests can 
            book the whole place or just a specific room. After that, 
            please provide the location and the maximum number of 
            guests it can accommodate.
          </Text>

          <BottomTabCreate navigation={navigation} backNav={backNav} nextNav={nextNav}/>
        </View>
    </SafeAreaView>
  )
}

export default Introduction
