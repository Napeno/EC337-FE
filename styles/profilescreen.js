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
    paddingBottom: 100,

  },
  
  titleProfile:{
    marginBottom: 24,
    marginTop: 16,
    fontSize: 34,
    fontFamily: 'Quicksand_700Bold'
  },

  firstLayer:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 32,
  },

  avatarProfile:{
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 100,
  },

  arrow:{
    width: 25,
    height: 25,
    marginLeft: 130,
  },

  nameWrap:{
    marginLeft: 24,
  },

  nameUser:{
    fontSize: 22,
    fontFamily: 'Quicksand_700Bold',
    marginBottom:4
  },

  viewProfile:{
    fontSize: 14,
    fontFamily: 'Quicksand_600SemiBold',
    color: '#736E6F'
  },

  adminWrap:{
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 110,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width:1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 32,
  },

  adminText:{
    marginVertical: 'auto',
    marginLeft: 20,
  },

  sectionBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginBottom: 14,
  },

});