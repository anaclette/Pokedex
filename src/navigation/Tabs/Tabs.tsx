import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../../screens/Search';
import Account from '../../screens/Account/index';
import {View, Text, TouchableOpacity} from 'react-native';
import StackNavigator from '../StackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './tabs.style';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
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
                    : route.name === 'Account'
                    ? 'account-circle-outline'
                    : 'magnify'
                }
                size={25}
                style={isFocused ? styles.focusedColor : styles.inactiveColor}
              />
              <Text
                style={isFocused ? styles.focusedColor : styles.inactiveColor}>
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
    </Tab.Navigator>
  );
};
