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
        marginBottom: 16
    },

    titleStep: {
        fontSize: 16,
        fontFamily: 'Quicksand_500Medium',
        marginBottom: 4
    },

    titleInfo: {
        fontSize: 28,
        fontFamily: 'Quicksand_700Bold',
        marginBottom: 18
    },

    
    pressBtn: {
        borderColor: '#365486',
        padding: 25,
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 200
    },

    textBtn: {
        fontFamily: "Quicksand_600SemiBold",
        color: '#365486',
        fontSize: 18
    },

});