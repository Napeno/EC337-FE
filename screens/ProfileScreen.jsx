import { ScrollView, View, Image, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from '../styles/profilescreen';
import avatarProfile from '../constants/avatar.png'
import arrow from '../constants/arrow.png'
import adminhouse from '../constants/profileImg.png'
import user from '../constants/user.png'
import creditCard from '../constants/creditcardIcon.png'
import fileIcon from '../constants/fileIcon.png'
import keyIcon from '../constants/keyIcon.png'
import notificaitionIcon from '../constants/notificaitionIcon.png'
import supportIcon from '../constants/supportIcon.png'
import suportCustomer from '../constants/customerSupportIcon.png'
import editIcon from '../constants/editIcon.png'
import switchIcon from '../constants/switchIcon.png'
import {logout} from '../components/logout'

import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { Filter } from 'react-native-svg';

const ProfileScreen = ({navigation}) => {

  const handleLogout = () =>{
    logout(navigation );
  };

  const handleCreate = () => {
    navigation.navigate("CREATE");
  };

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.viewContainer}>

          <Text style={styles.titleProfile}>
            Profile
          </Text>

          <View style={styles.firstLayer}>
            <Image
              style={styles.avatarProfile}
              source={avatarProfile}
              resizeMode='cover'
            />

            <View style={styles.nameWrap}>
              <Text style={styles.nameUser}>
                Samantha
              </Text>

              <Text style={styles.viewProfile}>
                View profile
              </Text>
            </View>

            <Image
              style={styles.arrow}
              source={arrow}
              resizeMode='contain'
            />

          </View>

          <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 32 }}></View>
          <Pressable
             onPress={handleCreate}
          >
            <View style={styles.adminWrap}>
              <View style={styles.adminText}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Quicksand_700Bold',
                    marginBottom: 4
                  }}
                >
                  House rental on Ladago
                </Text>
                <Text
                  style={{
                    width: 242,
                    fontSize: 14,
                    fontFamily: 'Quicksand_600SemiBold',
                    color: '#736E6F',
                  }}
                >
                  Setting up and starting to earn money is really simple
                </Text>
              </View>

              <Image
                style={{
                  width: 90,
                  alignSelf: 'center',
                  height: 90,
                  marginEnd: 12
                }}
                source={adminhouse}
                resizeMode='contain'
              />
            </View>
          </Pressable>

          <View style={styles.sectionSetting}>
            <Text
            style={{ 
              fontSize: 24,
              fontFamily: 'Quicksand_700Bold',
              marginBottom: 24,
             }}>
              Setting
            </Text>
            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={user}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Personal information
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>
            
            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={creditCard}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Payment information
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>

            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={fileIcon}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Taxes information
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>

            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={keyIcon}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Login and Security
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>

            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 30,
                  height: 33,
                  marginEnd: 8,
                  marginLeft: 7
                }}
                source={notificaitionIcon}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Notification
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 132,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 32}}></View>
            
          </View>

          <View style={styles.sectionSetting}>
            <Text
            style={{ 
              fontSize: 24,
              fontFamily: 'Quicksand_700Bold',
              marginBottom: 24,
             }}>
              Support
            </Text>
            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={supportIcon}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 180,
               }} >
                Access the Help Center
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 116,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>
            
            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={suportCustomer}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Report user
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>

            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={editIcon}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Give feedback to us
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 32}}></View>
                
          </View>
          <Pressable
             onPress={handleLogout}
          >
            <Text style={{ 
              fontSize: 16,
              fontFamily: 'Quicksand_700Bold',
              textDecorationLine: 'underline',
              marginBottom: 24,
            }} 
            >Logout</Text>
          </Pressable>
          

           <Pressable style={{ 
            backgroundColor: '#0F1035',
            width: 280,
            height: 59,
            borderRadius: 28,
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center'
            }}>
              <Image 
                style={{ 
                width: 30,
                height: 30,
                marginEnd: 8
              }}   
              source={switchIcon}
              resizeMode='contain'
              />
            <Text style={{ 
              fontSize: 18,
              fontFamily: 'Quicksand_600SemiBold',
              color: 'white'
             }}>
                Switch to owner mode
            </Text>
           </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
