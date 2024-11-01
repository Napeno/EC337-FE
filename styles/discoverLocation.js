import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flatListContainer: {
        gap: 16,
        marginTop: 16,
    },

    cardWrap:{
        width: 184,
        height: 220,
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

    title: {
        marginTop:12,
        marginLeft:12,
        width: 152,
        fontSize: 16,
        fontFamily: 'Quicksand_600SemiBold'
    },

    des: {
        marginTop:4,
        marginLeft:12,
        width:231,
        color: '#939393',
        fontFamily: 'Quicksand_500Medium',
    },

    des2: {
        marginTop:8,
        marginLeft:12,
        width:231,
        color: '#365486',
        fontFamily: 'Quicksand_600SemiBold',
    },


});