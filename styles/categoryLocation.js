import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flatListContainer: {
        gap: 16,
        marginTop: 16
    },

    cardWrap:{
        width: 257,
        height: 281,
        marginBottom: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.09,
        shadowRadius: 1,  
        borderWidth: 0.3,
        borderColor: '#C9C9C9',
        borderRadius: 12,
        elevation: 2
        },

    favoriteWraper: {
        position: 'absolute',
        width: 32,
        height:32,
        marginTop: 12,
        borderRadius:100,
        marginLeft: 213,
        backgroundColor: '#FFFFFF'
    },

    cardInfo:{
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginTop: 182,
        width: '100%',
        height: 99,
        position: 'absolute',
        backgroundColor: "#FFFFFF"
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
        fontSize: 16,
        fontFamily: 'Quicksand_600SemiBold'
    },

    address: {
        width:231,
        color: '#939393',
        fontFamily: 'Quicksand_500Medium',
    },

    price: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
        marginTop: 10,
        marginLeft: 12,
        color: '#365486',

    },

    stars: {
        fontSize: 15,
        fontFamily: 'Quicksand_600SemiBold'
    },

});