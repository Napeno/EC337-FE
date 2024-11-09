import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import {requestMoMoPayment} from '@/api/momo'
import {getStaticQR} from "@/api/vietqr";

export default function ProductDetailScreen({navigation, route }) {
    const { formData = [] } = route.params;
    console.log(formData);
    let totalAmount = formData.reduce((accum, product) => accum + product.price, 0);
    let qrURL = ''
  return (
      <ScrollView contentContainerStyle={styles.container}>
          {Array.isArray(formData) && formData.map((product, index) => (
              <View key={index} style={styles.productContainer}>
                  <Text style={styles.title}>{product.name}</Text>
                  <Image source={{ uri: product.imageUrl }} style={styles.image} />
                  <Text>Product Price: {product.price}</Text>
              </View>
          ))}
          <Button
            title="Generate QR code"
            onPress={async () => {
                const formDataToSend = {
                    accountNo: '1023189148',
                    accountName: 'NGUYEN SON HA',
                    acqId: 970436,
                    amount: Math.round(totalAmount * 1000),
                    addInfo: 'Thanh toán tại EC337',
                    template: 'compact2'
                }
                const result = await getStaticQR(formDataToSend);
                if (result) {
                    // console.log(result.data?.qrDataURL);
                    navigation.navigate('QRCodeScreen', { qrDataURL: result.data?.qrDataURL });
                } else {
                    // Handle error
                    console.log('Payment request failed');
                }
            }}
        />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  productContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
});
