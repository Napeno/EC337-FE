import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        padding: 20,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#154C91',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingHorizontal: 15,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    button: {
        backgroundColor: '#154C91',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#154C91',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    qrCodeContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrImage: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#154C91',
    },

    logoBank:{
        width: 120,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    logoWrapper: {
        borderRadius: 10,
        backgroundColor: 'white',
    },

    selectedLogo: {
        backgroundColor: '#E6E6E6', 
        borderRadius: 10,
    },

    containerQR:{
        backgroundColor: '#f9f9f9',
    },

    rowQR:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    }
});