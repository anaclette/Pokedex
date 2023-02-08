import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: '10%',
  },
  languageOptionWrapper: {
    borderColor: colors.translucidLightBackground,
  },
  topButtonWrapper: {
    borderTopWidth: metrics.scale(1),
    borderRightWidth: metrics.scale(1),
    borderBottomWidth: metrics.scale(1),
  },
  bottomButtonWrapper: {
    borderBottomWidth: metrics.scale(1),
    borderRightWidth: metrics.scale(1),
  },
  flagImage: {
    width: metrics.moderateScale(30, 0.4),
    height: metrics.moderateScale(30, 0.4),
  },
  languageOptionText: {
    textAlign: 'center',
    color: colors.translucidLightBackground,
    fontFamily: fonts.itemBold,
  },
});
