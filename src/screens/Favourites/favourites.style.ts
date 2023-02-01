import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: '30%',
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
    fontSize: metrics.scaledFontSize(30),
    alignSelf: 'flex-end',
  },
  subtitle: {
    fontFamily: fonts.mainLightText,
    fontSize: metrics.scaledFontSize(15),
    alignSelf: 'center',
    bottom: '22%',
    position: 'absolute',
  },
  linkText: {
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    fontSize: 17,
    letterSpacing: 0.5,
  },
});
