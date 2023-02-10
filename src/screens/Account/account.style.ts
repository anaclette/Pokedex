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
    alignItems: 'center',
    paddingTop: metrics.moderateScale(30),
  },
  warningContainer: {
    flexBasis: '8%',
    marginVertical: metrics.scale(9),
  },
  warningText: {
    color: colors.lightText,
    fontSize: fontScale * metrics.moderateScale(15, 0.3),
    fontFamily: fonts.itemBold,
    paddingHorizontal: metrics.scale(2),
  },
  diffAccountContainer: {
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
    flexBasis: '65%',
  },
  storedUserName: {
    fontSize: fontScale * metrics.moderateScale(35, 0.8),
    marginTop: metrics.verticalScale(15),
    marginBottom: metrics.verticalScale(60),
  },
  userInput: {
    color: colors.white,
    fontFamily: fonts.secondaryBold,
    textAlign: 'center',
  },
  diffUserNameContainer: {
    minHeight: metrics.verticalScale(60),
    marginTop: metrics.moderateScale(20),
  },
  diffUserNameMessage: {
    fontSize: metrics.moderateScale(20),
    marginBottom: metrics.moderateScale(15),
  },
  button: {
    borderRadius: metrics.scale(20),
    borderWidth: metrics.scale(1),
    borderColor: colors.white,
    alignSelf: 'center',
    backgroundColor: colors.contrastBlackBackground,
  },
  buttonText: {
    color: colors.white,
    fontSize: metrics.moderateScale(15),
    textAlign: 'center',
    fontFamily: fonts.secondaryText,
    padding: metrics.scale(7),
  },
  signInLogOutButton: {
    position: 'absolute',
    top: '30%',
    zIndex: 2,
  },
});
