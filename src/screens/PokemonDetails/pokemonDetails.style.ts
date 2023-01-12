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

  // container: {
  //   flex: 1,
  // },
  // pokeballImg: {
  //   opacity: 0.4,
  // },
  // imagesWrapper: {
  //   alignSelf: 'center',
  //   flex: 1,
  //   alignItems: 'center',
  // },
  // pokemonImg: {
  //   alignSelf: 'center',
  //   position: 'absolute',
  // },
  // name: {
  //   marginVertical: 50,
  //   textTransform: 'capitalize',
  //   textAlign: 'center',
  //   fontSize: 40,
  // },
});
