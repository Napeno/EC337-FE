import { StyleSheet } from 'react-native';
import { red } from 'react-native-redash';

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

      titleName:{
        fontSize: 20,
        fontFamily: 'Quicksand_600SemiBold',
        marginBottom: 10,
        color: '#365486'
      },

      textInput: {
        padding: 10,
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
      },

      desInput:{
        padding: 10,
        width: "100%",
        height: 200,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
      },

      checkTime:{
        flexDirection: "row", 
        alignItems: 'center',
        marginBottom: 16,
      },

      borderCheck:{
        borderWidth: 1,
        flexDirection: "row", 
        alignItems: 'center',
        borderRadius: 5,
        padding: 5
      },

      lineSpace:{
        width: 15,
        height: 3,
        backgroundColor: '#365486',
        borderRadius: 100,
        marginHorizontal: 10
      }
});