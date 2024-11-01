import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    height: '100%',
  },
  scrollView: {
    height: '100%',
  },
  viewContainer: {
    width: '100%',
    marginTop: 80,
    height: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 33,
    alignSelf: 'center',
    marginBottom: 80,
  },

  viewForm:{
    marginBottom:24,
  },

  titleForm: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 23,
    marginBottom: 26,
  },

  textInput: {
    padding: 10,
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
  },

  forgetPassword:{
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 14,
    fontWeight: "500",
    textAlign: 'right'
  },

  interact_btn:{
    marginBottom: 72,
  },

  loginScreenButton:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#365486',
    width: '100%',
    borderRadius: 5,
    height: 50,
    marginBottom: 16
  },

  login_btn:{
    color: 'white',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 23,
    fontWeight: '500',
  },

  registerScreenButton:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#365486',
    borderRadius: 5,
    width: '100%',
    height: 50,
    marginBottom: 16
  },

  register_btn:{
    color: '#365486',
    fontSize: 23,
    fontFamily: 'Quicksand_700Bold',
    fontWeight: '500',
  },

  other_login:{
  },

  icon_login: {
    justifyContent: 'center',
    alignItems: 'center',
    gap : 3,
    columnGap: 72,
    flexDirection: 'row'
  },

  icon:{
    width: 52,
    height: 52,
  },

  icon_apple:{
    width: 64,
    height: 64,
  },

  icon_phone:{
    width: 48,
    height: 48,
  },



});
