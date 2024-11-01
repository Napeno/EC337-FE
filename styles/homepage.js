import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    height: '100%',
  },
  scrollView: {
    
  },
  viewContainer: {
    width: '100%',
    marginTop: 20,
    height: '100%',
    paddingHorizontal: 20,
  },

  locationWrap:{
  },

  layerWrap:{
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatar:{
    width: 42,
    height: 42,
  },

  searchLocation:{
    flexDirection:'row',
    alignItems: 'center',
    width: '100%',
    height: 44,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  },

  searchIcon: {
    width: 16,
    height: 16,
    marginStart: 15,
  },

  ic_filter: {
    width: 20,
    height: 20,
    marginEnd: 15,
  },

  categories:{
    marginBottom: 16
  },

  cardHoriWrap:{
    marginBottom: 16,
    
  },

  textHoriWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  bottomTab:{
    alignSelf:'center'
  },

});