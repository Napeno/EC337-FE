import { View, Text, TextInput, Pressable, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState, useEffect } from 'react';
import { data } from '../constants/data'

import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

const RoomTabCreate = ({roomTabs, onDeleteRoom}) => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });

    const [value, setValue] = useState(null);

    const [selectedTabs, setSelectedTabs] = useState([]);

    useEffect(() => { });

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

    return (
        <View style={styles.coveredRoom}>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.roomTitle}>
                    Room {roomTabs + 1}
                </Text>

                <Pressable onPress={onDeleteRoom}>
                    <Text style={styles.deleteBtn}>
                        Delete
                    </Text>
                </Pressable>
            </View>
            
            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 15 }}></View>
            <Text style={styles.titleName}>
                Type of room name
            </Text>

            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data.typeRoom}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
            />

            <Text style={styles.titleName}>
                Room Occupacity
            </Text>

            <TextInput
                style={[styles.textInput]}
                keyboardType="numeric"
                placeholder="0"
                maxLength={2}
            />

            <Text style={styles.titleName}>
                Amenities
            </Text>

            <View style={styles.horiItem}>
                {['Bath Tub', 'Cleaning Ser'].map(tab => (
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
                {['Pet Allowed', 'Wifi'].map(tab => (
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
    )
}

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
    },

    titleName: {
        fontSize: 20,
        fontFamily: 'Quicksand_600SemiBold',
        marginBottom: 10,
        color: '#365486'
    },

    dropdown: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderBottomColor: 'gray',
        marginBottom: 16
    },

    placeholderStyle: {
        fontSize: 16,
        marginLeft: 10,
    },

    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Quicksand_500Medium',
    },

    iconStyle: {
        width: 20,
        height: 20,
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        fontFamily: 'Quicksand_500Medium',
    },

    horiItem: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },

    textItems: {
        fontFamily: "Quicksand_600SemiBold",
        fontSize: 15
    },

    checkedItem: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        width: 160,
        alignItems: 'center'
    },


    coveredRoom: {
        borderWidth: 1,
        borderColor: '#BFBCBD',
        paddingHorizontal: 15,
        borderRadius: 15,
        marginBottom: 40,
        paddingVertical: 20
    },
    roomTitle: {
        fontFamily: "Quicksand_600SemiBold",
        fontSize: 20,
        marginBottom: 20
    },
    deleteBtn:{
        fontFamily: "Quicksand_600SemiBold",
        fontSize: 16,
        color: '#365486',
    },
})

export default RoomTabCreate