import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { formData } = route.params;  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{formData.name}</Text>
      <Image source={{ uri: formData.imageUrl }} style={styles.image} />
      <Text>Product ID: {formData.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
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
