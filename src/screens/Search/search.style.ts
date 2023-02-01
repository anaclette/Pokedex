import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  pokeballImg: {
    width: 270,
    height: 270,
    top: '-5%',
    right: '-15%',
    position: 'absolute',
    opacity: 0.5,
  },
});
