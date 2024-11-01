import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flatListContainer: {
        gap: 16,
        marginTop: 16
    },

    cardWrap:{
        width: 327,
        height: 108,
        marginBottom: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.09,
        borderWidth: 0.3,
        borderColor: '#C9C9C9',
        shadowRadius: 1,  
        elevation: 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        },

    cardHolder:{
        flexDirection: 'row',
    },

    cardInfo:{
        height: 99,
    },

    textLine:{
        marginTop: 12,
        marginLeft: 12
    },

    titleStar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },

    title: {
        width: 152,
        fontSize: 14,
        fontFamily: 'Quicksand_600SemiBold'
    },

    address: {
        color: '#939393',
        width: 150,
        marginTop: 4,
        fontSize: 13,
        fontFamily: 'Quicksand_500Medium',
    },

    price: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 16,
        marginTop: 22,
        marginLeft: 12,
        color: '#365486',

    },

    stars: {
        fontSize: 13,
        fontFamily: 'Quicksand_600SemiBold'
    },

});