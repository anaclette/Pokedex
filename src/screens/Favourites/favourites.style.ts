import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics, {fontScale} from '../../themes/metrics';

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
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: '10%',
    zIndex: 2,
    width: '100%',
    paddingHorizontal: '5%',
  },
  title: {
    fontFamily: fonts.mainText,
    alignSelf: 'flex-end',
    color: colors.translucidLightBackground,
    fontSize: fontScale * metrics.moderateScale(35, 0.8),
  },
  subtitle: {
    fontFamily: fonts.mainLightText,
    color: colors.dark,
    fontSize: fontScale * metrics.moderateScale(15, 0.9),
    alignSelf: 'center',
    bottom: '22%',
    position: 'absolute',
    alignItems: 'center',
    marginHorizontal: metrics.scale(10),
  },
  navigateToPokedexButton: {
    borderRadius: metrics.scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontFamily: fonts.mainText,
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    color: colors.dark,
    fontSize: fontScale * metrics.moderateScale(16, 0.9),
    paddingHorizontal: metrics.scale(3),
  },
});
