import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    height: '100%',

  },
  scrollView: {
  },
  viewContainer: {
    width: '100%',
    marginTop: 20,
    height: '100%',
    paddingHorizontal: 20,

  },

  titleFavorite:{
    marginBottom:16,
    fontSize: 34,
    marginTop: 16,
    fontFamily: 'Quicksand_700Bold'
  },

  filterWrap:{
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:20,
  },

  filterBtn:{
    backgroundColor: "white",
    borderColor: '#B2B2B2',
    borderWidth: 1,
    padding: 14,
    borderRadius: 24,
  },

  filterText:{
    fontFamily: 'Quicksand_500Medium',
    fontSize: 14,
  },

});