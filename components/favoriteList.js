import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import {data} from '../constants/data'
import styles from '../styles/favoriteList'
import iconStar from '../constants/star_icon.png'
import favorite from '../constants/favorite.png'
import unfavorite from '../constants/unfavorite.png'

const FavoriteList = () => {
  return (
    <FlatList 
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        data={data.dataLocation}
        // keyExtractor={item=> item}
        renderItem={({item}) => (
            <FavoriteListItem 
                id = {item.id}
                isFavorite = {item.favorite}
                title = {item.name}
                imgUrl = {item.imgUrl}
                address = {item.address}
                price = {item.price}
                stars = {item.stars}
            />
        )}
    />
  )
}

const FavoriteListItem = ({id, isFavorite, title, imgUrl, address, price, stars}) => {

    return (
        <View style={[styles.cardWrap]}>
            <Pressable 
                // onPress={() => handleChangeCategory(isActive? null: title)} 
                style={[styles.cardWrap]}
            >
                <Image 
                    source={{ uri: imgUrl }}
                    style={{ 
                        width: '100%', 
                        height: 300,
                        borderTopRightRadius: 12,
                        borderTopLeftRadius: 12,
                     }}
                    resizeMode='cover'
                />

                <View style={styles.labelList}>
                    <Text style={styles.labelText}>
                        Most Popular
                    </Text>
                </View>

                <View style={styles.favoriteWraper}>
                    <Image 
                        source={isFavorite ? favorite : unfavorite}
                        style={{ 
                            width: 24, 
                            height: 20,
                            alignSelf: 'center',
                            marginVertical:'auto'
                        }}
                        resizeMode='cover'
                    />
                </View>

                <View style={styles.cardInfo}>

                     <View style={styles.textLine}>
                        <View style={styles.titleStar}>
                            <Text numberOfLines={1} style={styles.title}>
                                {title}
                            </Text>

                            <View style={{ flexDirection: 'row', marginRight: 12, }}>
                                <Image 
                                    source={iconStar}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10,
                                    }}
                                    resizeMode='contain'
                                />

                                <Text style={styles.stars}>
                                    {stars}
                                </Text>
                            </View>
                            
                        </View>

                        <Text style={styles.address} numberOfLines={1}>
                            {address}
                        </Text>

                     </View>
                    
                    <Text style={styles.date}>
                        5 nights - 31th May - 05th July
                    </Text>

                    <Text style={styles.price}>
                        {price} /night
                    </Text>

                    

                </View>
            </Pressable>   
        </View>
    )
}

export default FavoriteList