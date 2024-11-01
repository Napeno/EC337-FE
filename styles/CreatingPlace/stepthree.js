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
      },

      closeIcon: {
        width: 28,
        height: 28,
        marginBottom:16
      },

      titleStep:{
        fontSize: 16,
        fontFamily: 'Quicksand_500Medium',
        marginBottom: 4
      },

      titleInfo:{
        fontSize: 28,
        fontFamily: 'Quicksand_700Bold',
        marginBottom: 18
      },

      textInput: {
        padding: 10,
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
      },

});