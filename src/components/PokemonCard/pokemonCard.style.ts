import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '45%',
    flexGrow: 1,
    borderRadius: 20,
    margin: 3,
  },
  nameWrapper: {
    left: '5%',
    top: '5%',
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  id: {
    top: '-10%',
    alignSelf: 'flex-start',
  },
  name: {
    textTransform: 'capitalize',
    fontWeight: '700',
  },
  imagesWrapper: {
    alignItems: 'flex-end',
  },
  pokemonImage: {
    flex: 1,
    marginRight: 20,
    bottom: -10,
  },
  pokeballImage: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
});
