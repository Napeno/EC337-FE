import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import {data} from '../constants/data'
import styles from '../styles/categoryPopularLocation'
import iconStar from '../constants/star_icon.png'

const CategoryPopularLocation = () => {
  return (
    <FlatList 
        horizontal
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
        data={data.dataLocation}
        // keyExtractor={item=> item}
        renderItem={({item}) => (
            <CategoryPopularLocationItem 
                id = {item.id}
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

const CategoryPopularLocationItem = ({id, title, imgUrl, address, price, stars}) => {

    return (
        <View style={[styles.cardWrap]}>
            <Pressable 
                // onPress={() => handleChangeCategory(isActive? null: title)} 
                style={[styles.cardHolder]}
            >
                <Image 
                    source={{ uri: imgUrl }}
                    style={{ 
                        width: 84, 
                        height: 84,
                        borderRadius: 12,
                        marginLeft: 12,
                        marginTop:12
                     }}
                    resizeMode='cover'
                />

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

                        <Text style={styles.address} numberOfLines={1} >
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

export default CategoryPopularLocation