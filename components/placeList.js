import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native'
import {data} from '../constants/data'
import styles from '../styles/favoriteList'
import iconStar from '../constants/star_icon.png'
import favorite from '../constants/favorite.png'
import unfavorite from '../constants/unfavorite.png'
import React, { useEffect, useState } from 'react';
import {firestore} from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

const PlaceList = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const getData = async () => {
        const querySnapshot = await getDocs(collection(firestore, 'hotel'));
        const hotelData = [];
        querySnapshot.forEach((doc) => {
            hotelData.push(doc.data());
        });
        setHotels(hotelData);
        };

        getData();
    }, []);

    return (
     hotels.map((hotel) => (
        <PlaceListItem
            key={hotel.idHotel}
            id = {hotel.idHotel}
            isFavorite = {true}
            title = {hotel.name}
            imgUrl = {hotel.imgHotel[0]}
            address = {hotel.address}
            price = {hotel.price}
            stars = {hotel.rating}
        />)
    )
  )
}

const PlaceListItem = ({id, isFavorite, title, imgUrl, address, price, stars}) => {

    return (
        <View style={[styles.cardWrap, { marginBottom: 32 }, ]}>
            <Pressable 
                // onPress={() => handleChangeCategory(isActive? null: title)} 
                style={[styles.cardWrap, ]}
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

export default PlaceList