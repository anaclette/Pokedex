import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import metrics, {fontScale} from '../../themes/metrics';

export const styles = StyleSheet.create({
  abilitiesWrapper: {
    alignItems: 'center',
    borderRadius: metrics.scale(10),
    flexGrow: 1,
    maxWidth: '30%',
    flexWrap: 'nowrap',
  },
  title: {
    fontFamily: fonts.secondarySemiBold,
    fontSize: fontScale * metrics.moderateScale(15, 0.7),
  },
  listItem: {
    fontFamily: fonts.secondaryText,
    marginVertical: metrics.scaleVertical(1.5),
    textTransform: 'capitalize',
    paddingHorizontal: metrics.moderateScale(10, 0.5),
    fontSize: fontScale * metrics.moderateScale(13, 0.7),
  },
});
