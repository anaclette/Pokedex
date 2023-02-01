import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

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
    marginTop: 10,
  },
  warningText: {
    color: colors.lightText,
    fontSize: 16,
    fontFamily: fonts.itemBold,
  },
  diffAccountContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  textInput: {
    color: colors.dark,
    fontSize: 20,
    textTransform: 'capitalize',
    fontFamily: fonts.secondaryText,
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  textInputWrapper: {
    width: '50%',
  },
  storedUserNameContainer: {
    flexGrow: 2,
  },
  storedUserName: {
    fontSize: 30,
    flexBasis: '16%',
  },
  userInput: {
    color: colors.white,
    fontFamily: fonts.secondaryBold,
    textAlign: 'center',
  },
  diffUserNameContainer: {
    flexGrow: 1,
  },
  diffUserNameMessage: {
    fontSize: 20,
  },
  button: {
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.white,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: fonts.secondaryText,
    paddingHorizontal: 10,
  },
});
