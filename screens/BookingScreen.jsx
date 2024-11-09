import React from "react";

const { useState, useEffect } = require('react');
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {getProductByBarcode} from '@/api/product'

export default function BookingScreen({ navigation }) {  // Add navigation prop
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState('');
  const [formData, setFormData] = useState({
    barcode: '',
    createdAt: '',
    imageUrl: '',
    name: '',
    price: '',
    productId: '',
    updatedAt: '',
  });

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    console.log(data);
    const response = await getProductByBarcode(data);
    // console.log(response);
    setFormData((prevFormData) => {
        return Array.isArray(prevFormData) ? [...prevFormData, response] : [response];
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <View style={styles.container}>
          {/*<TextInput*/}
          {/*    value={barcode}*/}
          {/*    onChangeText={setBarcode}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*    title="Tap to get product"*/}
          {/*    onPress={async () => {*/}
          {/*        try {*/}
          {/*            const response = await getProductByBarcode(barcode);*/}
          {/*            console.log(response);*/}
          {/*            setFormData((prevFormData) => {*/}
          {/*                return Array.isArray(prevFormData) ? [...prevFormData, response] : [response];*/}
          {/*            });*/}
          {/*            setBarcode('');*/}
          {/*            console.log(response);*/}
          {/*        } catch (error) {*/}
          {/*            console.error("Error fetching product:", error);*/}
          {/*        }*/}
          {/*    }}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*    title="Go to Product Detail"*/}
          {/*    onPress={() => navigation.navigate('ProductDetail', {formData})}*/}
          {/*/>*/}


          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && (
            <>
                <Button
                    title="Reset product"
                    onPress={() => setFormData([])}
                />

              <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />

              <Button
                title="Go to Product Detail"
                onPress={() => navigation.navigate('ProductDetail', { formData })}
              />
            </>
          )}
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
