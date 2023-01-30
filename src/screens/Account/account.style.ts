import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.92)',
    opacity: 0.5,
  },
  loginWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningContainer: {
    flexBasis: '10%',
    justifyContent: 'center',
    marginTop: 10,
  },
  warningText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SourceSansPro-Bold',
  },
  diffAccountContainer: {
    justifyContent: 'space-between',
    height: '65%',
  },

  textInput: {
    color: 'black',
    fontSize: 20,
    textTransform: 'capitalize',
    fontFamily: 'SourceSansPro-Regular',
    padding: 5,
    backgroundColor: 'rgba(255,255,255, 0.92)',
    borderRadius: 10,
  },
  textInputWrapper: {
    width: '50%',
  },

  storedUserName: {
    fontSize: 30,
    top: '30%',
  },
  diffUserNameWrapper: {
    bottom: '10%',
  },
  userInput: {
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
  },
  diffUserNameMessage: {
    fontSize: 20,
  },
  button: {
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Regular',
    paddingHorizontal: 10,
  },
});
