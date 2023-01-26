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
  name: {
    flexGrow: 1,
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Quicksand-SemiBold',
  },
  loader: {
    alignSelf: 'center',
  },
  spriteImg: {
    flex: 1,
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
  abilitiesContainer: {
    marginBottom: 300,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  statName: {
    marginRight: 10,
    width: 150,
  },
});
