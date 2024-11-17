import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/cartItem'
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
const Cart = ({ formData }) => {
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
    <FlatList 
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
        data={formData}
        keyExtractor={item => item.productId.toString()} // Use productId as the key
        renderItem={({ item }) => (
            <CartItem 
                barcode={item.barcode}
                createdAt={item.createdAt}
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
                productId={item.productId}
                updatedAt={item.updatedAt}
            />
        )}
    />
  )
}

const CartItem = ({ barcode, createdAt, imageUrl, name, price, productId, updatedAt }) => {
    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () => {
        setQuantity(prev => prev + 1)
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    const totalPrice = price * quantity

    return (
        <View style={styles.cartItemContainer}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.productImage}
                resizeMode='repeat'
            />
            <View style={styles.detailsContainer}>
                <View style={styles.productInfoContainer}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productPrice}>{Math.round(price).toLocaleString('vi-VN')} VND</Text>
                    <View style={styles.quantityContainer}>
                        <Pressable style={styles.quantityButton} onPress={handleDecrease}>
                            <Text style={styles.quantityButtonText}>-</Text>
                        </Pressable>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <Pressable style={styles.quantityButton} onPress={handleIncrease}>
                            <Text style={styles.quantityButtonText}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.totalPrice}>{Math.round(totalPrice).toLocaleString('vi-VN')} VND</Text>
            </View>
        </View>
    )
}



export default Cart
