import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    flatListContainer: {
        marginTop: 5,
        width: '100%',
        height: '65%'
    },

    cartItemContainer: {
        width: '100%',
        flexDirection: 'row',  // Align items horizontally
        padding: 10,
        borderRadius: 8,
        elevation: 3, // Adds a shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 }, // iOS shadow
        shadowOpacity: 0.1, // iOS shadow
        shadowRadius: 4, // iOS shadow
        marginBottom: 12, // Space between items in the list
        alignItems: 'center', // Center the content vertically in each item
    },

    productImage: {
        width: 100,
        height: 100,
        marginRight: 15, // Space between image and text
        borderRadius: 8,
    },

    detailsContainer: {
        flex: 1, // Allow this container to take up the remaining space
        justifyContent: 'space-between', // Space between product details and price
        alignItems: 'flex-start',  // Align content to start horizontally
        flexDirection: 'row', // Align total price horizontally
        justifyContent: 'space-between',  // Space out content horizontally
    },

    productInfoContainer: {
        flex: 1,  // Make product name, price, and quantity take the available space
        justifyContent: 'space-between', // Space between product details and quantity
        gap: '3%'

    },

    productName: {
        fontSize: 20,
        fontFamily: 'Quicksand_700Bold',
        color: '#333',
        marginBottom: 5,
    },

    productPrice: {
        fontSize: 14,
        color: '#F57C00',
        fontFamily: 'Quicksand_700Bold',
        marginBottom: 10,
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: '10%'

    },

    quantityButton: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 3, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.01,
        shadowRadius: 2,
        backgroundColor: 'white'

    },

    quantityButtonText: {
        color: '#5275C4',
        fontSize: 24,
        fontFamily: 'Quicksand_700Bold',
    },

    quantityText: {
        fontSize: 16,
        fontFamily: 'Quicksand_700Bold',
    },

    totalPrice: {
        fontSize: 20,
        fontFamily: 'Quicksand_700Bold',
        color: '#154C91',
        alignSelf: 'center',
        marginBottom: 25
    },
})