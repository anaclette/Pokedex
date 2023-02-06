import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    zIndex: 2,
    minHeight: metrics.scale(38),
  },
  textInput: {
    color: colors.burgundy,
    backgroundColor: colors.translucidLightBackground,
    height: '100%',
    borderColor: colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: metrics.scale(20),
    paddingLeft: '3%',
    fontFamily: fonts.secondaryText,
  },
  searchIconButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    right: '4%',
  },
});
