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

      house: {
        width: 380,
        height: 380,
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

      description:{
        fontSize: 14,
        fontFamily: 'Quicksand_400Regular',
        lineHeight: 24
      },
});