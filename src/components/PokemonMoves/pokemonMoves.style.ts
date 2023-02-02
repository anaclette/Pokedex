import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    marginVertical: metrics.scale(13),
  },
  title: {
    fontFamily: fonts.secondarySemiBold,
    left: '8%',
    marginBottom: '5%',
    fontSize: metrics.scaledFontSize(17),
  },
  fullMovesWrapper: {
    paddingHorizontal: metrics.scale(10),
  },
  fullMovesItem: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontFamily: fonts.secondaryText,
    fontSize: metrics.scaledFontSize(15),
  },
  moveItem: {
    fontSize: metrics.scaledFontSize(15),
    margin: metrics.scale(5),
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
    fontSize: metrics.scaledFontSize(15),
    textDecorationLine: 'underline',
    fontFamily: fonts.mainText,
  },
});
