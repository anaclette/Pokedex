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
  },
  fullMovesItem: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 17,
  },
  moveItem: {
    margin: 6,
    textTransform: 'capitalize',
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
});
