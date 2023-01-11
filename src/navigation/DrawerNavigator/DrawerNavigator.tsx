import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import PokemonList from '../../screens/PokemonList';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../StackNavigator/StackNavigator';

export type DrawerStackParams = {
  Home: undefined;
  Pokedex: {navigation: StackScreenProps<RootStackParams, 'PokemonDetails'>};
};

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Pokedex" component={PokemonList} />
    </Drawer.Navigator>
  );
};
