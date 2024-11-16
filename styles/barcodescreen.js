import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    height: '100%',

  },

  viewContainer: {
    width: '100%',
    marginTop: 20,
    height: '100%',
    paddingHorizontal: 20,
    paddingBottom: 100,

  },
  titleBarcode: {
    marginBottom: 16,
    fontSize: 34,
    marginTop: 16,
    fontFamily: 'Quicksand_700Bold'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F8F8FB',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10%', 
    width: 180,
    height: 180,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Quicksand_700Bold',
  },
  textDes: {
    fontSize: 12,
    fontFamily: 'Quicksand_600SemiBold  ',
    textAlign: 'center',
    color: '#A9A9A9'
  },
  wrap_button: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  wrap_text:{
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '10%',
  },
  
  button_icon:{
    width: 69,
    height: 69,
  },

  sectionBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginBottom: 14,
  },
  wrap_columns:{
    marginBottom: '10%'
  },
  
});