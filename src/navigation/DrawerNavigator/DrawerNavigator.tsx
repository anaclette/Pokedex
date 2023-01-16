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
    <Drawer.Navigator screenOptions={{title: ''}}>
      <Drawer.Screen
        options={{drawerLabel: 'Home'}}
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        options={{drawerLabel: 'Pokedex'}}
        name="Pokedex"
        component={PokemonList}
      />
    </Drawer.Navigator>
  );
};
