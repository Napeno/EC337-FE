import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import {data} from '../constants/data'
import styles from '../styles/messageList'
import iconStar from '../constants/star_icon.png'

const MessageList = () => {
  return (
    <FlatList 
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        data={data.message}
        // keyExtractor={item=> item}
        renderItem={({item}) => (
            <MessageListItem 
                id = {item.id}
                name = {item.name}
                imgUrl = {item.avatarUrl}
                lastMsg = {item.lastMsg}
                time = {item.time}
                isSeen = {item.seen}
            />
        )}
    />
  )
}

const MessageListItem = ({id, name, imgUrl, lastMsg, time, isSeen}) => {
    let fontFamily = isSeen? "Quicksand_500Medium" : "Quicksand_700Bold";
    let color = isSeen? "#939393" : "black";
    let display = isSeen? "none" : "";
    return (
        <View style={[styles.cardWrap]}>
            <Pressable 
                // onPress={() => handleChangeCategory(isActive? null: title)} 
                style={[styles.cardHolder]}
            >
                <Image 
                    source={{ uri: imgUrl }}
                    style={{ 
                        width: 60, 
                        height: 60,
                        borderRadius: 12,
                     }}
                    resizeMode='cover'
                />

                <View style={styles.cardInfo}>
                    
                        <Text style={styles.name} numberOfLines={1}>
                            {name}
                        </Text>

                    <View style={styles.textLine}>

                        <Text style={[styles.lastMsg, {fontFamily}, {color}]} numberOfLines={1}>
                            {lastMsg}
                        </Text>

                        <Text style={[styles.time, {fontFamily}, {color}]}>
                            {time} 
                        </Text>
                    </View>
                    
                    <View style={[styles.seenCircle, {display}]}>

                    </View>
                </View>
            </Pressable>   
        </View>
    )
}

export default MessageList