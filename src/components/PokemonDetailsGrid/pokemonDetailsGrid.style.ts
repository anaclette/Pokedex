import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.secondarySemiBold,
    fontSize: 15,
  },
  listItem: {
    fontFamily: fonts.item,
    marginVertical: 3,
    fontSize: 15,
  },
});
