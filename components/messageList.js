import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {data} from '../constants/data'
import styles from '../styles/messageList'
import iconStar from '../constants/star_icon.png'
import {getListTransaction} from "@/api/payos";

const MessageList = () => {

    const [loading, setLoading] = useState(true);
    const [transaction, setTransaction] = useState([]);

    const fetchData = async () => {
        try {
            const response = await getListTransaction();
            console.log('API Response:', response);
            setTransaction(response?.data?.orders);
            // if (response?.data?.orders) {
            //     setTransactions(response?.data?.orders);
            // }
        } catch (error) {
            console.error('Error fetching transactions:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <FlatList
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            data={transaction}
            // keyExtractor={item=> item}
            renderItem={({item}) => (
                <MessageListItem
                    order_code={item.order_code}
                    description={item.description}
                    status={item.status}
                    amount={item.amount}
                    updated_at={item.updated_at}
                />
            )}
        />
    )
}

const MessageListItem = ({order_code, description, status, amount, updated_at}) => {
    let color = 'green'
    if(status ==='PAID'){
        color = 'green'
    }else if(status === 'PENDING'){
        color = 'orange'
    }else{
        color = 'red'
    }

    const date = new Date(updated_at);

    const options = {
        timeZone: 'Asia/Bangkok', // GMT+7
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    const formattedDate = date.toLocaleString('en-GB', options);
    return (
        <View style={[styles.cardWrap]}>
            <View style={[styles.seenCircle, { backgroundColor: color }]}>

            </View>
            <Pressable 
                // onPress={() => handleChangeCategory(isActive? null: title)} 
                style={[styles.cardHolder]}
            >
                <View style={styles.cardInfo}>
                    <View style={styles.timeTransaction}>
                        <Text style={styles.name} numberOfLines={1}>
                            {status}
                        </Text>
                        <Text style={styles.timeTransactionItem} numberOfLines={1}>
                            {formattedDate}
                        </Text>
                    </View>


                    <View style={styles.textLine}>

                        <Text style={[styles.lastMsg]} numberOfLines={1}>
                            {description}
                        </Text>

                        <Text style={[styles.time, {color: color}]}>
                            {Math.round(amount).toLocaleString('vi-VN')} VND
                        </Text>
                    </View>
                    

                </View>
            </Pressable>   
        </View>
    )
}

export default MessageList