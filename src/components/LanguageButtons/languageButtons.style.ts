import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    top: '8%',
    right: '1%',
    zIndex: 1,
  },
  languageOptionWrapper: {
    borderColor: colors.translucidLightBackground,
    borderRadius: metrics.scale(20),
    borderWidth: metrics.scale(1),
    marginHorizontal: metrics.verticalScale(2),
  },
  flagImage: {
    width: metrics.moderateScale(30, 0.4),
    height: metrics.moderateScale(30, 0.4),
    borderRadius: metrics.scale(20),
  },
});
