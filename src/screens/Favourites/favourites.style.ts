import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  pokeballImg: {
    width: metrics.scale(245),
    height: metrics.scale(245),
    top: '-5%',
    right: '-15%',
    position: 'absolute',
    opacity: 0.5,
  },
  noFavsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    position: 'absolute',
    top: '10%',
    zIndex: 2,
    right: '10%',
    fontFamily: fonts.mainText,
    fontSize: metrics.scaledFontSize(35),
    alignSelf: 'flex-end',
    color: colors.translucidLightBackground,
  },
  subtitle: {
    fontFamily: fonts.mainLightText,
    fontSize: metrics.scaledFontSize(15),
    alignSelf: 'center',
    bottom: '22%',
    position: 'absolute',
    lineHeight: metrics.scaleVertical(20),
    color: colors.dark,
  },
  navigateToPokedexButton: {
    borderRadius: metrics.scale(10),
  },
  linkText: {
    fontFamily: fonts.mainText,
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    fontSize: metrics.scaledFontSize(16),
    padding: metrics.scale(2),
    color: colors.dark,
  },
});
