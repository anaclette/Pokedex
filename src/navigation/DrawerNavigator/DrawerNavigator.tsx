import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PokemonList from '../../screens/PokemonList';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../StackNavigator/StackNavigator';
import Home from '../../screens/Home';

export type DrawerStackParams = {
  Home: undefined;
  Pokedex: {navigation: StackScreenProps<RootStackParams, 'PokemonDetails'>};
};

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: '',
        sceneContainerStyle: {backgroundColor: 'rgba(255,255,255, 0.92)'},
        headerTransparent: true,
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        options={{
          drawerLabel: 'Home',

          drawerActiveBackgroundColor: 'transparent',
          drawerActiveTintColor: 'darkblue',
          drawerInactiveTintColor: 'black',
          drawerInactiveBackgroundColor: 'transparent',
          drawerContentContainerStyle: {
            backgroundColor: 'rgba(2,35,252,0.2)',
            opacity: 0.5,
            flex: 1,
          },
        }}
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerLabel: 'Pokedex',
          drawerActiveBackgroundColor: 'transparent',
          drawerActiveTintColor: 'darkblue',
          drawerInactiveTintColor: 'black',
          drawerInactiveBackgroundColor: 'transparent',
          drawerContentContainerStyle: {
            backgroundColor: 'rgba(2,35,252,0.2)',
            opacity: 0.5,
            flex: 1,
          },
        }}
        name="Pokedex"
        component={PokemonList}
      />
    </Drawer.Navigator>
  );
};
