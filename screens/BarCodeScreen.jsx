import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/barcodescreen'
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import createQR from '../constants/scanqr.png'
import scanBarcode from '../constants/scanbarcode.png'
import createBarcode from '../constants/createbarcode.png'
import cart from '../constants/cart.png'
import supportIcon from '../constants/supportIcon.png'
import suportCustomer from '../constants/customerSupportIcon.png'
import editIcon from '../constants/editIcon.png'
import arrow from '../constants/arrow.png'


export default function BarcodeScreen() {
  const navigation = useNavigation();
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

      <Text style={styles.titleBarcode}>
            Barcode List
          </Text>
        <View style={styles.wrap_columns}>
          <View style={styles.wrap_button}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CreateQRScreen')}
            >
              <Image 
                    source={createQR}
                    style={styles.button_icon}
                    resizeMode='contain'
                />
                <View style={styles.wrap_text}>
                  <Text style={styles.buttonText}>Create QR code</Text>
                  <Text style={styles.textDes}>Created 263</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Booking')}
            >
              <Image 
                    source={scanBarcode}
                    style={styles.button_icon}
                    resizeMode='contain'
                />
                <View style={styles.wrap_text}>
                  <Text style={styles.buttonText}>Scan Barcode</Text>
                  <Text style={styles.textDes}>Scanned 321</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.wrap_button}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CreateBarcode')}
            >
              <Image 
                    source={createBarcode}
                    style={styles.button_icon}
                    resizeMode='contain'
                />
                <View style={styles.wrap_text}>
                  <Text style={styles.buttonText}>Create Barcode</Text>
                  <Text style={styles.textDes}>Created 102</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ViewCart')}
            >
              <Image 
                    source={cart}
                    style={styles.button_icon}
                    resizeMode='contain'
                />
                <View style={styles.wrap_text}>
                  <Text style={styles.buttonText}>Check Cart</Text>
                  <Text style={styles.textDes}>Checked 187</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
      
      <View style={styles.sectionSetting}>
            <Text
            style={{ 
              fontSize: 24,
              fontFamily: 'Quicksand_700Bold',
              marginBottom: 24,
             }}>
              Support
            </Text>
            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={supportIcon}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 180,
               }} >
                Access the Help Center
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 116,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>
            
            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={suportCustomer}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Report user
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>

            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={editIcon}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Give feedback to us
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 32}}></View>
                
          </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};
