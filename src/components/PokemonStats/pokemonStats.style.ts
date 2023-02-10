import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    marginVertical: metrics.scaleVertical(13),
  },
  title: {
    fontFamily: fonts.secondarySemiBold,
    left: '10%',
    marginBottom: '5%',
  },
  statItem: {
    fontFamily: fonts.secondaryBold,
    paddingLeft: metrics.scale(6),
    color: colors.dark,
  },
  rowContainer: {
    marginBottom: metrics.scaleVertical(4),
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: metrics.scaleVertical(10),
    alignItems: 'center',
  },
  nameWrapper: {
    flex: 1,
  },
  statName: {
    fontFamily: fonts.secondaryText,
    textTransform: 'capitalize',
  },
  bar: {
    flex: 1,
    backgroundColor: colors.gainsboroLightBackground,
    borderRadius: metrics.scale(10),
  },
  statValueWrapper: {
    borderRadius: metrics.scale(10),
  },
});
