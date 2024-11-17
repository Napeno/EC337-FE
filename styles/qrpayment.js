import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 10,
        alignItems: 'center',
        marginBottom: 30
    },
    qrWrapper:{
        marginBottom: 20
    },
    qrGradientWrapper: {
        padding: 12,
        borderRadius: 20,
        marginBottom: 20,
    },
    qrBorder: {
        padding: 10,
        borderWidth: 6,
        borderColor: '#154C91',
        borderRadius: 16,
        backgroundColor: '#F5F9FF',
    },
    infoContainer: {
        width: '100%',
    },
    title: {
        fontSize: 26,
        fontFamily: 'Quicksand_700Bold',
        color: '#154C91',
        textAlign: 'center',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: '#154C91',
        fontFamily: 'Quicksand_700Bold',
    },
    status: {
        fontSize: 16,
        backgroundColor:'#EEA32B',
        paddingVertical: 20,
        borderRadius: 20,
        paddingHorizontal: 30,
        fontFamily: 'Quicksand_700Bold',
        color: 'white',
    },
    statusPaid: {
        fontSize: 16,
        backgroundColor:'#26DB81',
        paddingVertical: 20,
        borderRadius: 20,
        paddingHorizontal: 30,
        fontFamily: 'Quicksand_700Bold',
        color: 'white',
        marginBottom: 20
    },
    noQRText: {
        fontSize: 18,
        color: '#999',
    },
    buttonPayment:{
        backgroundColor: '#154C91',
        paddingVertical: 20,
        borderRadius: 20,
        paddingHorizontal: 30,
        width: '100%',
        alignItems: 'center',
      },
      buttonText: {
          color: '#fff',
          fontSize: 16,
          fontFamily: 'Quicksand_700Bold',
      },
});