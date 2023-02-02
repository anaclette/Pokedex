import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.secondarySemiBold,
    fontSize: metrics.scaledFontSize(15),
  },
  listItem: {
    fontFamily: fonts.secondaryText,
    marginVertical: metrics.scaleVertical(2.5),
    fontSize: metrics.scaledFontSize(15),
  },
  detailsWrapper: {
    alignItems: 'center',
  },
});
