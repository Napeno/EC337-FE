import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import {data} from '../constants/data'
import styles from '../styles/categoryLocation'
import iconStar from '../constants/star_icon.png'
import favorite from '../constants/favorite.png'
import unfavorite from '../constants/unfavorite.png'

const CategoryLocation = () => {
  return (
    <FlatList 
        horizontal
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
        data={data.dataLocation}
        // keyExtractor={item=> item}
        renderItem={({item}) => (
            <CategoryLocationItem 
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

const CategoryLocationItem = ({id, isFavorite, title, imgUrl, address, price, stars}) => {

    return (
        <View style={[styles.cardWrap]}>
            <Pressable 
                // onPress={() => handleChangeCategory(isActive? null: title)} 
                style={[styles.cardWrap]}
            >

                <Image 
                    source={{ uri: imgUrl }}
                    style={{ 
                        width: 257, 
                        height: 182,
                        borderTopRightRadius: 12,
                        borderTopLeftRadius: 12,
                     }}
                    resizeMode='cover'
                />

                <View style={styles.favoriteWraper}>
                    <Image 
                        source={isFavorite ? favorite : unfavorite}
                        style={{ 
                            width: 19, 
                            height: 16,
                            alignSelf: 'center',
                            marginVertical:'auto'
                        }}
                        resizeMode='cover'
                    />
                </View>

                <View style={styles.cardInfo}>

                     <View style={styles.textLine}>
                        <View style={styles.titleStar}>
                            <Text style={styles.title}>
                                {title}
                            </Text>

                            <View style={{ flexDirection: 'row', marginRight: 12, }}>
                                <Image 
                                    source={iconStar}
                                    style={{
                                        width: 17,
                                        height: 17,
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
                    

                    

                    <Text style={styles.price}>
                        {price} /night
                    </Text>

                    

                </View>
            </Pressable>   
        </View>
    )
}

export default CategoryLocation