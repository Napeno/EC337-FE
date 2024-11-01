import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import {data} from '../constants/data'
import styles from '../styles/discoverLocation'

const DiscoverLocation = () => {
  return (
    <FlatList 
        horizontal
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
        data={data.dataLocation}
        // keyExtractor={item=> item}
        renderItem={({item}) => (
            <DiscoverLocationItem 
                id = {item.id}
                title = {item.name}
                imgUrl = {item.imgUrl}
                address = {item.address}
            />
        )}
    />
  )
}

const DiscoverLocationItem = ({id, isFavorite, title, imgUrl, address, price, stars}) => {

    return (
        <View style={[styles.cardWrap]}>
            <Pressable 
                // onPress={() => handleChangeCategory(isActive? null: title)} 
            >
                <Image 
                    source={{ uri: imgUrl }}
                    style={{ 
                        marginTop:8,
                        width: 168, 
                        height: 120,
                        borderRadius: 12,
                        alignSelf: 'center'
                     }}
                    resizeMode='cover'
                />

                <View style={styles.cardInfo}>
                    <Text style={styles.title}>
                            {title}
                        </Text>
                    <Text style={styles.des} numberOfLines={1}>
                        What to do in this city
                    </Text>
                    <Text style={styles.des2} numberOfLines={1}>
                        See more
                    </Text>
                </View>
            </Pressable>   
        </View>
    )
}

export default DiscoverLocation