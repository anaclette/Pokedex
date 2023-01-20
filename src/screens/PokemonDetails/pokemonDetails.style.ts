import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  whiteContainer: {
    backgroundColor: '#fff',
  },
  pokemonImageContainer: {
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  pokeballImg: {
    alignSelf: 'flex-end',
    opacity: 0.4,
  },
  pokemonImg: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  nameWrapper: {
    flexDirection: 'row',
  },
  name: {
    flexGrow: 1,
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 20,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  spriteImg: {
    flex: 1,
  },
  moveItemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullMovesWrapper: {
    padding: '10%',
    opacity: 0.8,
    borderRadius: 100,
  },
  buttonText: {
    textDecorationLine: 'underline',
    fontFamily: 'Ubuntu-Medium',
    alignSelf: 'center',
  },
  fullMovesItem: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 17,
    fontFamily: 'SourceSansPro-Regular',
  },
  moveItem: {
    margin: 6,
    textTransform: 'capitalize',
    fontFamily: 'SourceSansPro-Regular',
  },
  showFullMovesBtn: {
    bottom: '20%',
  },
  seeFullContentText: {
    marginLeft: 3,
  },
  seeLessContentText: {
    fontSize: 20,
  },
  title: {
    fontFamily: 'Quicksand-SemiBold',
    left: '8%',
    marginBottom: '1%',
  },
  listItem: {
    fontFamily: 'SourceSansPro-Black',
    left: '13%',
    marginBottom: '1%',
  },
  // detailsWrapper: {
  //   left: '10%',
  // },
});
