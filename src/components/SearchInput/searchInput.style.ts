import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    zIndex: 2,
    minHeight: 40,
  },
  textInput: {
    color: colors.burgundy,
    backgroundColor: colors.translucidLightBackground,
    height: '100%',
    borderColor: colors.gray,
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
