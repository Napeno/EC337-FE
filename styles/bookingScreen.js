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

  firstLayer:{
    marginBottom: 24,
    marginTop: 16,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  tilteBooking:{
    fontSize: 34,
    fontFamily: 'Quicksand_700Bold'
  },
  
  editBooking:{
    fontSize: 18,
    fontFamily: 'Quicksand_500Medium',
    textDecorationLine: 'underline'
  },

});