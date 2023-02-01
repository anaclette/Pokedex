import {StyleSheet} from 'react-native';
import {height} from '../../common/constants';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

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
    fontFamily: fonts.secondarySemiBold,
    fontSize: metrics.scaledFontSize(15),
  },
  imagesWrapper: {
    alignItems: 'flex-end',
  },
  pokemonImage: {
    flex: 1,
    right: 20,
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
  favouritePokeCard: {
    height: height * 0.2,
  },
  favouritePokeballImage: {
    width: 100,
    height: 100,
  },
  favouritePokemonImageContainer: {
    width: 170,
    height: 170,
  },
  favouritePokeNameWrapper: {
    right: 0,
  },
  favouritePokeName: {
    alignSelf: 'flex-end',
    right: '5%',
    fontSize: metrics.scale(17),
  },
});
