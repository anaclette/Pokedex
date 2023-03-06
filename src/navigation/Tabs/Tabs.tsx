import React from 'react';
import {
  BottomTabNavigationEventMap,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Search from '../../screens/Search';
import Account from '../../screens/Account/index';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './tabs.style';
import {useAppSelector} from '../../state/hooks';
import Favourites from '../../screens/Favourites';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';
import {
  ParamListBase,
  TabNavigationState,
  NavigationHelpers,
} from '@react-navigation/native';
import {BottomTabDescriptorMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import PokemonList from '../../screens/PokemonList';
import metrics, {fontScale} from '../../themes/metrics';
interface TabsProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

type TabNavigationProps = {
  Pokedex: undefined;
  Search: undefined;
  Favourites: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator<TabNavigationProps>();

const MyTabBar = ({state, navigation, descriptors}: TabsProps) => {
  const username = useAppSelector(appState => appState.auth.username);
  const {t} = useTranslation();
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
              target: route.key as string,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key as string,
            });
          };

          const getIconName = () => {
            return route.name === 'Pokedex'
              ? 'pokeball'
              : route.name === t(TranslationKeys.TAB_ACCOUNT) && !username
              ? 'account'
              : route.name === t(TranslationKeys.TAB_ACCOUNT) && username
              ? 'human-greeting-variant'
              : route.name === username
              ? 'heart'
              : 'magnify';
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
                name={getIconName()}
                size={fontScale * metrics.moderateScale(20, 1)}
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
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      sceneContainerStyle={styles.tabsContainer}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name={t(TranslationKeys.TAB_ACCOUNT) as keyof TabNavigationProps}
        component={Account}
      />
      {username && (
        <Tab.Screen
          name={username as keyof TabNavigationProps}
          component={Favourites}
        />
      )}

      <Tab.Screen
        name="Pokedex"
        options={{title: 'PikaDex'}}
        component={PokemonList}
      />
      <Tab.Screen
        name={t(TranslationKeys.TAB_SEARCH) as keyof TabNavigationProps}
        component={Search}
      />
    </Tab.Navigator>
  );
};
