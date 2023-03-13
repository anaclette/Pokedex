import {StyleSheet} from 'react-native';
import metrics, {fontScale} from '../../themes/metrics';
import fonts from '../../themes/fonts';

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
    fontSize: fontScale * metrics.moderateScale(15, 0.7),
  },
  imagesWrapper: {
    alignItems: 'flex-end',
  },
  pokemonImageContainer: {
    width: metrics.moderateScale(110, 0.7),
    height: metrics.moderateScale(110, 0.7),
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
    height: metrics.verticalScale(120),
    justifyContent: 'center',
  },
  favouriteCardImageContainer: {
    height: '100%',
    width: metrics.moderateScale(130, 0.6),
  },
  favouritePokeballImage: {
    flex: 1,
    bottom: metrics.scaleVertical(10),
  },
  favouritePokeName: {
    fontSize: fontScale * metrics.moderateScale(20, 0.5),
  },
});
