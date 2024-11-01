import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import {data} from '../constants/data'
import styles from '../styles/bookingList'
import iconStar from '../constants/star_icon.png'
import favorite from '../constants/favorite.png'
import unfavorite from '../constants/unfavorite.png'

const BookingList = () => {
  return (
    <FlatList 
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        data={data.dataLocation}
        // keyExtractor={item=> item}
        renderItem={({item}) => (
            <BookingListItem 
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

const BookingListItem = ({id, isFavorite, title, imgUrl, address, price, stars}) => {

    return (
        <View style={[styles.cardWrap]}>
            <Pressable 
                // onPress={() => handleChangeCategory(isActive? null: title)} 
                style={[styles.cardFlexWrap]}
            >
                <Image 
                    source={{ uri: imgUrl }}
                    style={{ 
                        width: '50%', 
                        height: '100%',
                        borderRadius: 16,
                        marginVertical: 'auto',
                    }}
                    resizeMode='cover'
                />

                <View style={styles.cardInfo}>

                     <View style={styles.textLine}>
                        <View style={styles.titleStar}>
                            <Text numberOfLines={1} style={styles.title}>
                                {title}
                            </Text>
                            <View style={styles.labelList}>
                                <Text style={styles.labelText}>
                                    Most Popular
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: 12, marginBottom: 4 }}>
                                <Image 
                                    source={iconStar}
                                    style={{
                                        width: 16,
                                        height: 16,
                                        marginRight: 8,
                                    }}
                                    resizeMode='contain'
                                />
                                <Text style={styles.stars}>
                                    {stars}
                                </Text>

                                <Text style={styles.reviews}>
                                - 200 reviews
                                </Text>
                            </View>
                            
                        </View>

                        <Text style={styles.address} numberOfLines={2}>
                            {address}
                        </Text>

                     </View>
                    
                    <View style={ styles.billingInfo}>
                        <View style={styles.container}>
                            <Text style={styles.date}>
                                31th May - 05th July
                            </Text>
                        </View>
                        <Text style={styles.room}>
                            1 room: 1 bed
                        </Text>

                        <Text style={styles.night}>
                            3 nights
                        </Text>
                        
                        <Text style={styles.price}>
                            {price}
                        </Text>

                        <Text style={styles.tax}>
                            Included tax and fee
                        </Text>
                    </View>


                    
                </View>
            </Pressable>   

            <Pressable style={styles.showScreenBtn}>
              <Text style={styles.showBtn}>
                See more detail
              </Text>
            </Pressable>
        </View>
    )
}

export default BookingList