import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics, {fontScale} from '../../themes/metrics';

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
    fontSize: fontScale * metrics.moderateScale(15, 0.8),
    fontFamily: fonts.itemBold,
    paddingHorizontal: metrics.scale(2),
  },
  diffAccountContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  textInput: {
    color: colors.burgundy,
    fontSize: fontScale * metrics.moderateScale(15, 0.8),
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
    fontSize: fontScale * metrics.moderateScale(35, 0.8),
    marginBottom: metrics.verticalScale(50),
  },
  userInput: {
    color: colors.white,
    fontFamily: fonts.secondaryBold,
    textAlign: 'center',
  },
  diffUserNameContainer: {
    flexGrow: 1,
    marginTop: metrics.verticalScale(100),
  },
  diffUserNameMessage: {
    fontSize: metrics.moderateScale(20),
  },
  button: {
    borderRadius: metrics.scale(20),
    borderWidth: metrics.scale(1),
    borderColor: colors.white,
    alignSelf: 'center',
    marginVertical: metrics.verticalScale(15),
  },
  buttonText: {
    color: colors.white,
    fontSize: metrics.moderateScale(18),
    textAlign: 'center',
    fontFamily: fonts.secondaryText,
    padding: metrics.scale(9),
  },
});
