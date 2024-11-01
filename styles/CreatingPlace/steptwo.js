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

      horiItem:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
      },    

      textItems:{
        fontFamily: "Quicksand_600SemiBold",
        fontSize: 20
      },

      checkedItem:{
        padding: 25,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        width: 180,
        alignItems: 'center'
      },


});