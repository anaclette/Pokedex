import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
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
});
