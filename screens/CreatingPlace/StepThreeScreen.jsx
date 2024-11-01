import { ScrollView, View, Image, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles/CreatingPlace/stepthree';
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

const StepThreeScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });
    const backNav = "STEPTWO";
    const nextNav = "STEPFOUR";

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.viewContainer}>
                <Image
                    style={styles.closeIcon}
                    source={close}
                    resizeMode='cover'
                />
                <Text style={styles.titleStep}>
                    Step 3
                </Text>

                <Text style={styles.titleInfo}>
                    Location of your place
                </Text>

                <TextInput
                    style={styles.textInput}
                    placeholder="Type here"
                    returnKeyType='done'
                    placeholderTextColor="gray"
                />

                <BottomTabCreate navigation={navigation} backNav={backNav} nextNav={nextNav} />
            </View>
        </SafeAreaView>
    )
}

export default StepThreeScreen
