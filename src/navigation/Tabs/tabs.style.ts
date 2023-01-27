import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: '3%',
    height: '12%',
    backgroundColor: 'rgba(255,255,255, 0.8)',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
  },
  tabBarButton: {
    alignItems: 'center',
  },
  focusedColor: {
    color: 'darkblue',
  },
  favouritesActiveTabIcon: {
    color: 'red',
  },
  inactiveColor: {
    color: 'gray',
  },
  label: {
    fontFamily: 'AbrilFatface-Regular',
  },
});
