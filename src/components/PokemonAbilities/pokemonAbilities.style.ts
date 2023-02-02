import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  abilitiesWrapper: {
    alignItems: 'center',
    borderRadius: metrics.scale(10),
    flexGrow: 1,
    maxWidth: '30%',
  },
  title: {
    fontFamily: fonts.secondarySemiBold,
  },
  listItem: {
    fontFamily: fonts.secondaryText,
    marginVertical: metrics.scaleVertical(1.5),
    textTransform: 'capitalize',
  },
});
