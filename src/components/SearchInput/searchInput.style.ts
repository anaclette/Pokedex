import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    zIndex: 2,
  },
  textInput: {
    color: 'brown',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 230,
    paddingLeft: '3%',
  },
  searchIconButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    right: '8%',
  },
});
