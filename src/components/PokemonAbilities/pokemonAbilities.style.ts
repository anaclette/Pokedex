import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';

export const styles = StyleSheet.create({
  abilitiesWrapper: {
    alignItems: 'center',
    borderRadius: 20,
    flexGrow: 1,
    maxWidth: '30%',
  },
  title: {
    fontFamily: fonts.secondarySemiBold,
  },
  listItem: {
    fontFamily: fonts.item,
    marginVertical: 2,
    textTransform: 'capitalize',
  },
});
