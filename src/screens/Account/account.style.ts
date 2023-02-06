import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loginWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  warningContainer: {
    flexBasis: '10%',
    justifyContent: 'center',
    marginTop: metrics.scale(9),
  },
  warningText: {
    color: colors.lightText,
    fontSize: metrics.scaledFontSize(15),
    fontFamily: fonts.itemBold,
    paddingHorizontal: metrics.scale(2),
  },
  diffAccountContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  textInput: {
    color: colors.burgundy,
    fontSize: metrics.scaledFontSize(20),
    textTransform: 'capitalize',
    fontFamily: fonts.secondaryText,
    padding: metrics.scale(4),
    backgroundColor: colors.white,
    borderRadius: metrics.scale(10),
  },
  textInputWrapper: {
    width: '50%',
  },
  storedUserNameContainer: {
    flexGrow: 2,
  },
  storedUserName: {
    fontSize: metrics.scale(30),
    flexBasis: '16%',
  },
  userInput: {
    color: colors.white,
    fontFamily: fonts.secondaryBold,
    textAlign: 'center',
  },
  diffUserNameContainer: {
    flexGrow: 1,
    marginTop: '10%',
  },
  diffUserNameMessage: {
    fontSize: metrics.scaledFontSize(20),
  },
  button: {
    borderRadius: metrics.scale(20),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.white,
    alignSelf: 'center',
    marginTop: metrics.scale(10),
  },
  buttonText: {
    color: colors.white,
    fontSize: metrics.scaledFontSize(20),
    marginVertical: metrics.scale(9),
    textAlign: 'center',
    fontFamily: fonts.secondaryText,
    paddingHorizontal: metrics.scale(9),
  },
});
