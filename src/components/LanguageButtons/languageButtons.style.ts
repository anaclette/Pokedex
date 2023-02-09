import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '8%',
    right: 0,
    zIndex: 1,
  },
  languageOptionWrapper: {
    borderColor: colors.translucidLightBackground,
    borderRadius: metrics.scale(20),
    borderWidth: metrics.scale(1),
    marginVertical: metrics.verticalScale(1),
  },
  flagImage: {
    width: metrics.moderateScale(30, 0.4),
    height: metrics.moderateScale(30, 0.4),
    borderRadius: metrics.scale(20),
  },
});
