import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flatListContainer: {
        gap: 16,
    },

    cardWrap:{
        width: "100%",
        height: 100,
        marginBottom: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.09,
        borderColor: '#C9C9C9',
        shadowRadius: 1,  
        elevation: 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        alignContent: 'center',
        justifyContent: 'center'
        },

    cardHolder:{
        flexDirection: 'row',
    },

    cardInfo:{
        marginLeft: 14,
        marginTop: 10,

    },

    textLine:{
        flexDirection: 'row',
    },

    name: {
        width: 152,
        fontSize: 18,
        fontFamily: 'Quicksand_700Bold'
    },

    lastMsg: {
        color: '#939393',
        width: 220,
        fontSize: 16,
        fontFamily: 'Quicksand_500Medium',
    },

    time: {
        fontFamily: 'Quicksand_500Medium',
        color: '#939393',
        fontSize: 16,
        marginLeft: 10,
    },

    seenCircle:{
        backgroundColor: "#4DABF5",
        borderRadius: 100,
        width: 12,
        height:12,
        position: 'absolute',
        alignSelf: 'flex-end'        
    },

});