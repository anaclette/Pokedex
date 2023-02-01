import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontFamily: fonts.secondarySemiBold,
    left: '10%',
    fontSize: 16,
    marginBottom: '5%',
  },
  listItem: {
    fontFamily: fonts.item,
  },
  rowContainer: {
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  nameWrapper: {
    flex: 1,
  },
  statName: {},
  bar: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gainsboroLightBackground,
    borderRadius: 10,
  },
});
