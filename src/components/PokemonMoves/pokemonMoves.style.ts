import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontFamily: fonts.secondarySemiBold,
    left: '8%',
    marginBottom: '5%',
    fontSize: 16,
  },
  fullMovesWrapper: {
    paddingHorizontal: 15,
  },
  fullMovesItem: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontFamily: fonts.secondaryText,
    fontSize: 15,
  },
  moveItem: {
    fontSize: 15,
    margin: 6,
    textTransform: 'capitalize',
    fontFamily: fonts.secondaryText,
  },
  seeFullContentText: {
    marginLeft: '5%',
  },
  seeLessContentText: {
    marginTop: '5%',
    alignSelf: 'center',
  },
  moveItemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    textDecorationLine: 'underline',
    fontFamily: fonts.mainText,
  },
});
