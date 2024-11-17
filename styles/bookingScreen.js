import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#white',
},
cameraWrapper: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
},
camera: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
},
scanOverlay: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    width: '80%',
    height: '15%',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
},
button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
},
buttonPayment:{
  backgroundColor: '#154C91',
  paddingVertical: 10,
  paddingHorizontal: 30,
  marginBottom: 10,
  borderRadius: 5,
  width: '100%',
  alignItems: 'center',
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},
avatar:{
  position: 'absolute',
  width: '100%',
  height: '50%',
  justifyContent: 'center',
  alignItems: 'center',
},
overlay: {
  position: 'absolute',
  top: '10%',
  left: '5%',
  width: '90%',
  height: '50%',
  justifyContent: 'center',
  alignItems: 'center',
},
scanBox: {
  width: '80%',
  height: '40%',
  position: 'relative',
},
scanLine: {
  position: 'absolute',
  width: '100%',
  height: 4,
  backgroundColor: '#6AB9F7',
},

closeButton: {
  marginTop: 10,
  padding: 10,
  backgroundColor: 'red',
},
mainContent: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
openButton: {
  position: 'absolute',
  width: '100%',
  height: '50%',
  justifyContent: 'center',
  alignItems: 'center',
},

drawer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  overflow: 'visible', // Allows content to overflow beyond the drawer boundaries
},
drawerContent: {
  flex: 1, // Ensures content can scroll if needed
  position: 'relative', // To allow absolute positioning of the button
},

button_expand: {
  position: 'absolute',
  top: -25, // Adjust to move the button outside the drawer, above the content
  left: '50%',
  transform: [{ translateX: -25 }], // Adjust the translateX value to center the button
  width: 50, // Adjust the size of the button
  height: 50,
  zIndex: 10, // Ensure the button stays above the drawer content
},

wrapContent:{
  paddingHorizontal: 20,
  paddingVertical: 25
},

wrapHeader: {
  flexDirection: 'row',  // Aligns children horizontally
  justifyContent: 'space-between',  // Spreads out content to both sides
  alignItems: 'center',  // Vertically centers the items
  marginBottom: 18
},

wrapHeaderContent:{
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'flex-start',
  gap: '8%',
  marginBottom: '1%'
},

leftContent: {
  flexDirection: 'column',
  alignItems: 'flex-start',
},

drawerHeader:{
  fontSize: 24,
  fontFamily: 'Quicksand_700Bold'
},

cart_icon:{
  width: 28,
  height: 28  
},

cartView:{
  
},
drawerItem:{
  fontSize: 18,
  marginLeft: 40,
  fontFamily: 'Quicksand_600SemiBold',
  color: '#A9A9A9'
},

cashHeader:{
  fontSize: 26,
  fontFamily: 'Quicksand_700Bold',
  color: "#154C91",
},

bottomWrap: {
  bottom: 0,  // Ensures the container stays at the bottom
  left: 0,
  right: 0,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopWidth: 1,
  borderTopColor: '#ddd',
  width: '100%'
},

totalWrap:{
  width: '100%',
  paddingVertical: '8%',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'space-between',
},

totalText:{
  fontSize: 18,
  fontFamily: 'Quicksand_700Bold'
},


divider: {
  borderBottomWidth: 1.5,
  borderBottomColor: '#D2D2D2',
  marginTop: 10,
},

buttonWrap: {
  bottom: 100,
  left: 0,
  right: 0,
  width: '100%',
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  paddingHorizontal: 30,
},

resetIcon:{
  width: 44,
  height: 44,
},

});