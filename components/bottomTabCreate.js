import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

const BottomTabCreate = ({navigation, backNav, nextNav}) => {
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
    const handleNext = () => {
        navigation.navigate(nextNav);
    };

    const handleBack = () => {
        navigation.navigate(backNav);
    };

    return (
        <View style={styles.bottomBar}>
                <View style={styles.listBar}>
                    <View style={[styles.Bar, {}]}></View>
                    <View style={[styles.Bar, {}]}></View>
                    <View style={[styles.Bar, {}]}></View>
                    <View style={[styles.Bar, {}]}></View>
                    <View style={[styles.Bar, {}]}></View>
                    <View style={[styles.Bar, {}]}></View>
                </View>
                <View style={styles.navigateButtons}>
                    <Pressable style={styles.backBar} onPress={handleBack}>
                        <Text style={[styles.textNav, { color: '#365486' }]}>Back</Text>
                    </Pressable>
                    <Pressable style={styles.nextBar} onPress={handleNext}>
                        <Text style={[styles.textNav, { color: '#FFFFFF' }]}>Next</Text>
                    </Pressable>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    bottomBar:{
        height: 140,
        backgroundColor: "white",
        position: 'absolute', left: 0, right: 0, bottom: 0
      },

      listBar:{
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
      },

      Bar:{
        width: 55,
        height: 5,
        backgroundColor: '#A8A8A8',
        borderRadius: 100
      },

      navigateButtons:{
        marginTop: 34,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
      },

      backBar:{
        width: 127,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#365486',
      },

      nextBar:{
        width: 127,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#365486',
      },

      textNav: {
        fontSize: 20,
        fontFamily: 'Quicksand_600SemiBold',
      },
})

export default BottomTabCreate