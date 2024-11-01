import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flatListContainer: {
        gap: 42,
        marginTop: 16,
        paddingBottom: 150,
    },

    cardWrap:{
        width: '100%',
        height: 425,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        borderRadius: 12,
    },

    labelList: {
        position: 'absolute',
        borderColor: '#F2F2F2',
        borderWidth: 1,
        alignSelf: 'baseline',
        padding: 8,
        borderRadius:20,
        marginTop: 16,
        marginLeft: 16,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.09,
        shadowRadius: 1,
    },

    labelText: {
        fontSize: 16,
        fontFamily: 'Quicksand_600SemiBold'
    },

    favoriteWraper: {
        position: 'absolute',
        borderColor: '#F2F2F2',
        borderWidth: 1,
        width: 50,
        height:50,
        marginTop: 12,
        borderRadius:100,
        marginLeft: 312,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.09,
        shadowRadius: 1,
    },

    cardInfo:{
        width: '100%',
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
        width: 230,
        fontSize: 18,
        fontFamily: 'Quicksand_600SemiBold'
    },

    address: {
        width:231,
        color: '#939393',
        fontFamily: 'Quicksand_500Medium',
    },

    date: {
        fontFamily: 'Quicksand_500Medium',
        fontSize: 14,
        marginTop: 4,
        marginLeft: 12,
        color: '#939393',

    },

    price: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 12,
    },

    stars: {
        fontSize: 18,
        fontFamily: 'Quicksand_600SemiBold'
    },

});