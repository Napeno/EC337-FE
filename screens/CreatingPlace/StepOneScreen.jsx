import { ScrollView, View, Image, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles/CreatingPlace/stepone';
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

const StepOneScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });

    const backNav = "CREATE";
    const nextNav = "STEPTWO";
    const [number, onChangeNumber] = React.useState('');

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                    <View style={styles.viewContainer}>
                        <Image
                            style={styles.closeIcon}
                            source={close}
                            resizeMode='cover'
                        />

                        <Text style={styles.titleStep}>
                            Step 1
                        </Text>

                        <Text style={styles.titleInfo}>
                            Place Information
                        </Text>
                        <Text style={styles.titleName}>
                            Hotel Name
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type here"
                            returnKeyType='done'
                            placeholderTextColor="gray"
                        />
                        <Text style={styles.titleName}>
                            Description
                        </Text>
                        <TextInput
                            style={styles.desInput}
                            multiline={true}
                            maxLength={1000}
                            placeholder="Type here"
                            placeholderTextColor="gray"
                        />
                        <Text style={styles.titleName}>
                            CheckIn - Checkout Time
                        </Text>
                        <View style={styles.checkTime}>
                            <Text style={{ fontSize: 18 }} >{"In: "}</Text>
                            <View style={styles.borderCheck}>
                                <TextInput
                                    style={{ width: 30, textAlign: 'center', fontSize: 18 }}
                                    keyboardType="numeric"
                                    placeholder="00"
                                    maxLength={2}
                                />
                                <Text>{":"}</Text>
                                <TextInput
                                    style={{ width: 30, textAlign: 'center', fontSize: 18 }}
                                    keyboardType="numeric"
                                    placeholder="00"
                                    maxLength={2}
                                />
                            </View>
                            <View style={styles.lineSpace}></View>
                            <Text style={{ fontSize: 18 }} >{"Out: "}</Text>
                            <View style={styles.borderCheck}>
                                <TextInput
                                    style={{ width: 30, textAlign: 'center', fontSize: 18 }}
                                    keyboardType="numeric"
                                    placeholder="00"
                                    maxLength={2}
                                />
                                <Text>{":"}</Text>
                                <TextInput
                                    style={{ width: 30, textAlign: 'center', fontSize: 18 }}
                                    keyboardType="numeric"
                                    placeholder="00"
                                    maxLength={2}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Text style={styles.titleName}>
                                Rating: 
                            </Text>
                            <View style={[styles.borderCheck, { width: 40, marginLeft:5 }]}>
                                <TextInput
                                    style={{ width: 30, textAlign: 'center', fontSize: 18 }}
                                    keyboardType="numeric"
                                    placeholder="00"
                                    maxLength={2}
                                />
                            </View>
                        </View>
                        

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>

            <BottomTabCreate navigation={navigation} backNav={backNav} nextNav={nextNav}/>
            
        </SafeAreaView>
    )
}

export default StepOneScreen
