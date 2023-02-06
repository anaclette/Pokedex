import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pokeballImg: {
    alignSelf: 'flex-end',
    opacity: 0.4,
  },
  nameAndTypesWrapper: {
    left: '13%',
  },
  scrollView: {
    borderTopEndRadius: metrics.scale(20),
    borderTopLeftRadius: metrics.scale(20),
  },
  name: {
    paddingBottom: metrics.scaleVertical(4),
    textTransform: 'capitalize',

    fontFamily: fonts.secondarySemiBold,
  },
  typeItemWrapper: {
    borderRadius: metrics.scale(20),
  },
  typeItem: {
    textTransform: 'capitalize',
    fontFamily: fonts.secondaryText,
    padding: metrics.scale(7),
  },
  loader: {
    alignSelf: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  marginLeft: {
    marginLeft: metrics.scale(7),
  },
});
