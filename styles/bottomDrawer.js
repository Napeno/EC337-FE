import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bookingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 16,
    flexDirection: 'column',  // Ensures content is arranged vertically
  },
  drawerContent: {
    flex: 1,  // Ensures the content takes all available space
    justifyContent: 'space-between',  // Pushes bottom content to the bottom
  },
  header: {
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    padding: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
