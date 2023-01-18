import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '3%',
    height: '10%',
    backgroundColor: 'rgba(255,255,255, 0.8)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tabBarButton: {
    alignItems: 'center',
  },
  focusedColor: {
    color: 'darkblue',
  },
  inactiveColor: {
    color: 'gray',
  },
});
