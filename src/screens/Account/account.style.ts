import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.92)',
    justifyContent: 'center',
    opacity: 0.5,
  },
  diffAccountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Regular',
    paddingHorizontal: 10,
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
  loginWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: '30%',
  },
  warningContainer: {
    alignItems: 'center',
    paddingVertical: '20%',
    height: '20%',
    flexGrow: 2,
  },
  textInputWrapper: {
    width: '50%',
    flexGrow: 5,
  },
  warningText: {
    color: '#fff',
    borderRadius: 20,
    paddingHorizontal: '5%',
    fontSize: 16,
    fontFamily: 'SourceSansPro-Bold',
  },
  userInputContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  userInput: {
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
  },
  storedUserName: {
    fontSize: 30,
  },
  diffUserNameMessage: {
    fontSize: 20,
  },
  button: {
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: 10,
  },
});
