import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '5%',
    height: '12%',
    backgroundColor: 'rgba(255,255,255, 0.92)',
  },
  tabBarButton: {
    alignItems: 'center',
  },
  focusedColor: {
    color: '#673ab7',
  },
  inactiveColor: {
    color: 'gray',
  },
});
