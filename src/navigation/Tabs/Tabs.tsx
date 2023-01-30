import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../../screens/Search';
import Account from '../../screens/Account/index';
import {View, Text, TouchableOpacity} from 'react-native';
import StackNavigator from '../StackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './tabs.style';
import {useAppSelector} from '../../state/hooks';
import Favourites from '../../screens/Favourites';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
  const username = useAppSelector(appState => appState.auth.username);
  return (
    <View style={styles.tabBar}>
      {state.routes.map(
        (route: {key: string | number; name: any}, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarButton}>
              <Icon
                name={
                  route.name === 'Home'
                    ? 'home-outline'
                    : route.name === 'Account' && !username
                    ? 'account'
                    : route.name === 'Account' && username
                    ? 'human-greeting-variant'
                    : route.name === username
                    ? 'heart'
                    : 'magnify'
                }
                size={25}
                style={
                  route.name === username && isFocused
                    ? styles.favouritesActiveTabIcon
                    : isFocused
                    ? styles.focusedColor
                    : styles.inactiveColor
                }
              />
              <Text
                style={[
                  isFocused
                    ? {...styles.focusedColor}
                    : {...styles.inactiveColor},
                  styles.label,
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
};

export const Tabs = () => {
  const username = useAppSelector(appState => appState.auth.username);

  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'rgba(255,255,255, 0.92)'}}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Account" component={Account} />
      {username && <Tab.Screen name={username} component={Favourites} />}
    </Tab.Navigator>
  );
};
