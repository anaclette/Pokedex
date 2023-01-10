import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '45%',
    flexGrow: 1,
    borderRadius: 20,
    margin: 3,
  },
  titleWrapper: {
    left: '5%',
    top: '5%',
    position: 'absolute',
    zIndex: 1,
  },
  imagesWrapper: {
    alignItems: 'flex-end',
  },
  pokemonImage: {
    flex: 1,
    marginRight: 20,
    bottom: -10,
  },
  pokebolaImage: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
});
