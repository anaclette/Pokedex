import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics, {fontScale} from '../../themes/metrics';

export const styles = StyleSheet.create({
  tabsContainer: {
    backgroundColor: colors.translucidLightBackground,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: '3%',
    height: '12%',
    backgroundColor: colors.translucidLightBackground,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
  },
  tabBarButton: {
    alignItems: 'center',
  },
  focusedColor: {
    color: colors.indigoFocusColor,
  },
  favouritesActiveTabIcon: {
    color: colors.favouriteColor,
  },
  inactiveColor: {
    color: colors.cadetBlueInactiveColor,
  },
  label: {
    fontFamily: fonts.tabBarLabel,
    fontSize: fontScale * metrics.moderateScale(12, 0.9),
  },
});
