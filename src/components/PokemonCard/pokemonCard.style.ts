import {StyleSheet} from 'react-native';
import {height} from '../../common/constants';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    width: '45%',
    flexGrow: 1,
    borderRadius: metrics.scale(12),
    margin: metrics.scale(3),
  },
  nameWrapper: {
    top: '5%',
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  id: {
    left: '5%',
    top: '-10%',
    alignSelf: 'flex-start',
  },
  name: {
    textTransform: 'capitalize',
    fontFamily: fonts.secondaryBold,
    paddingHorizontal: '5%',
    letterSpacing: metrics.scale(0.5),
  },
  imagesWrapper: {
    alignItems: 'flex-end',
  },
  pokemonImage: {
    flex: 1,
    right: metrics.scale(15),
    bottom: metrics.scale(-5),
  },
  pokeballImage: {
    width: metrics.scale(75),
    height: metrics.scale(75),
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
  favouritePokeCard: {
    height: height * 0.25,
    justifyContent: 'center',
  },
  favouriteCardImageContainer: {
    height: '100%',
  },
  favouritePokeballImage: {
    flex: 1,
    bottom: metrics.scaleVertical(10),
  },
  favouritePokeName: {
    alignSelf: 'flex-end',
    right: '5%',
    fontSize: metrics.scale(17),
  },
});
