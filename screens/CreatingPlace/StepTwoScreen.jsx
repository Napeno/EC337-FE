import { ScrollView, View, Image, Text, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/CreatingPlace/steptwo';
import close from '../../constants/close.png';
import BottomTabCreate from '../../components/bottomTabCreate'
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

const tabs = [
    'Car pack',
    'Check in 24H',
    'Private room',
    'Front desk',
    'Key access',
    'Banking',
    'Pay directly'
];

const StepOneScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });

    const [selectedTabs, setSelectedTabs] = useState([]);

    useEffect(() => {});

    const handlePress = (tabIndex) => {
        setSelectedTabs(selectedTabs.includes(tabIndex)
            ? selectedTabs.filter(index => index !== tabIndex)
            : [...selectedTabs, tabIndex]);
    };

    const getTabStyles = (tabIndex) => ({
        backgroundColor: selectedTabs.includes(tabIndex) ? '#365486' : 'transparent',
        color: selectedTabs.includes(tabIndex) ? 'white' : 'black',
    });

    if (!fontsLoaded) {
        return null;
    }

    const backNav = "STEPONE";
    const nextNav = "STEPTHREE";

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

                        <Text style={styles.titleStep}>Step 2</Text>
                        <Text style={styles.titleInfo}>Accommodation and Payment Information</Text>
                        <Text style={styles.titleName}>Accommodation</Text>

                        <View style={styles.horiItem}>
                            {['Car pack', 'Check in 24H'].map(tab => (
                                <Pressable
                                    key={tab}
                                    style={[styles.checkedItem, { backgroundColor: getTabStyles(tab).backgroundColor }]}
                                    onPress={() => handlePress(tab)}
                                >
                                    <Text style={[styles.textItems, { color: getTabStyles(tab).color }]}>
                                        {tab}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>

                        <View style={styles.horiItem}>
                            {['Private room', 'Front desk'].map(tab => (
                                <Pressable
                                    key={tab}
                                    style={[styles.checkedItem, { backgroundColor: getTabStyles(tab).backgroundColor }]}
                                    onPress={() => handlePress(tab)}
                                >
                                    <Text style={[styles.textItems, { color: getTabStyles(tab).color }]}>
                                        {tab}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>

                        <Pressable
                            style={[styles.checkedItem, { marginBottom: 20, backgroundColor: getTabStyles('Key access').backgroundColor }]}
                            onPress={() => handlePress('Key access')}
                        >
                            <Text style={[styles.textItems, { color: getTabStyles('Key access').color }]}>
                                Key access
                            </Text>
                        </Pressable>

                        <Text style={styles.titleName}>Payment</Text>

                        <View style={styles.horiItem}>
                            {['Banking', 'Pay directly'].map(tab => (
                                <Pressable
                                    key={tab}
                                    style={[styles.checkedItem, { backgroundColor: getTabStyles(tab).backgroundColor }]}
                                    onPress={() => handlePress(tab)}
                                >
                                    <Text style={[styles.textItems, { color: getTabStyles(tab).color }]}>
                                        {tab}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
            <BottomTabCreate navigation={navigation} backNav={backNav} nextNav={nextNav}/>
        </SafeAreaView>
    );
};

export default StepOneScreen;
