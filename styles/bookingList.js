import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flatListContainer: {
        gap: 120,
        marginTop: 16,
        paddingBottom: 200,
    },

    cardWrap:{
        width: '100%',
        height: 308,
        borderRadius: 12,
    },

    cardFlexWrap:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },

    labelList: {
        alignSelf: 'baseline',
        padding: 6,
        borderRadius:20,
        backgroundColor: '#E9F5FE',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 1,
        marginBottom: 8,
    },

    labelText: {
        fontSize: 12,
        fontFamily: 'Quicksand_600SemiBold'
    },

    cardInfo:{
        width: '50%'
    },

    textLine:{
        marginTop: 12,
        marginLeft: 12
    },

    titleStar:{
        marginBottom: 4,
    },

    title: {
        width: 230,
        fontSize: 18,
        fontFamily: 'Quicksand_600SemiBold',
        marginBottom: 6,
    },

    address: {
        marginBottom: 8,
        width:150,
        fontFamily: 'Quicksand_500Medium',
    },

    billingInfo:{

    },

    container:{
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },

    date: {
        padding: 8,
        writingDirection: 'rtl',
        fontFamily: 'Quicksand_500Medium',
        fontSize: 14,
    },

    room:{
        textAlign: 'right',
        marginBottom: 6,
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 16,
    },

    night:{
        marginBottom: 8,
        textAlign: 'right',
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 16,
    },

    tax:{
        textAlign: 'right',
        fontFamily: 'Quicksand_500Medium',
        fontSize: 14,
        color: '#939393',
    },

    price: {
        textAlign: 'right',
        marginBottom: 4,
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
    },

    stars: {
        fontSize: 14,
        fontFamily: 'Quicksand_600SemiBold'
    },

    reviews: {
        fontSize: 14,
        marginLeft: 8,
        color: '#939393',
        fontFamily: 'Quicksand_600SemiBold'
    },

    showScreenBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#365486',
        width: '80%',
        borderRadius: 24,
        height: 50,
        marginBottom: 16
      },
    
      showBtn:{
        color: 'white',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
      },

});