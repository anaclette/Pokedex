import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';

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
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  name: {
    marginBottom: 5,
    textTransform: 'capitalize',
    fontSize: 30,
    fontFamily: fonts.secondarySemiBold,
  },
  typeItemWrapper: {
    borderRadius: 20,
  },
  typeItem: {
    textTransform: 'capitalize',
    fontFamily: fonts.item,
    padding: 10,
  },
  loader: {
    alignSelf: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  marginLeft: {
    marginLeft: 8,
  },
});
