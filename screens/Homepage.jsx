import { ScrollView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/homepage';
import Categories from '../components/categories';
import CategoryLocation from '../components/categoryLocation';
import CategoryPopularLocation from '../components/caregoryPopularLocation';
import DiscoverLocation from '../components/discoverLocation';
import PlaceList from '../components/placeList'

import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

const Homepage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.viewContainer}>
          <View style={styles.layerWrap}>
            <View style={styles.locationWrap}>
              <Text style={{ fontSize: 14, fontFamily: 'Quicksand_400Regular', marginBottom: 4 }}>Current Location</Text>
              <Text style={{ fontSize: 16, fontFamily: 'Quicksand_600SemiBold' }}>Ho Chi Minh City</Text>
            </View>
            <Image
              source={require('../constants/avatar.png')}
              style={styles.avatar}
              resizeMode='contain'
            />
          </View>

          <View style={styles.searchLocation}>
            <Image
              source={require('../constants/searchIcon.png')}
              style={styles.searchIcon}
              resizeMode='contain'
            />
            <Text style={{ fontFamily: 'Quicksand_400Regular', fontSize: 16, color: '#758086', marginStart: 15, flex: 1 }}>
              Where to go
            </Text>
            <Text style={{ fontFamily: 'Quicksand_600SemiBold', fontSize: 16, marginRight: 8 }}>
              Filter
            </Text>
            <Image
              source={require('../constants/ic_filter.png')}
              style={styles.ic_filter}
              resizeMode='contain'
            />
          </View>

          <View style={styles.categories}>
            <Categories activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />
          </View>

          <View style={styles.cardHoriWrap}>
            <View style={styles.textHoriWrap}>
              <Text style={{ fontFamily: 'Quicksand_600SemiBold', fontSize: 16 }}>
                Near Location
              </Text>
              <Text style={{ fontFamily: 'Quicksand_600SemiBold', fontSize: 16 }}>
                See all
              </Text>
            </View>
            <CategoryLocation />
          </View>

          <View style={styles.cardHoriWrap}>
            <View style={styles.textHoriWrap}>
              <Text style={{ fontFamily: 'Quicksand_600SemiBold', fontSize: 16 }}>
                Popular Place
              </Text>
              <Text style={{ fontFamily: 'Quicksand_600SemiBold', fontSize: 16 }}>
                See all
              </Text>
            </View>
            <CategoryPopularLocation />
          </View>

          <View style={styles.cardHoriWrap}>
            <View style={styles.textHoriWrap}>
              <Text style={{ fontFamily: 'Quicksand_600SemiBold', fontSize: 16 }}>
                Discover
              </Text>
              <Text style={{ fontFamily: 'Quicksand_600SemiBold', fontSize: 16 }}>
                See all
              </Text>
            </View>
            <DiscoverLocation  />
          </View>
        <View style ={[styles.cardHoriWrap, {paddingBottom: 100}]}>
          <Text style={{ fontFamily: 'Quicksand_600SemiBold', fontSize: 16, marginBottom:24 }}>
                Recommend today
          </Text>
          <PlaceList />
        </View>

        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;
