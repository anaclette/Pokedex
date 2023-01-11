import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import PokemonDetails from '../../screens/PokemonDetails';
import PokemonList from '../../screens/PokemonList';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Pokedex" component={PokemonList} />
      <Drawer.Screen name="Pokemon details" component={PokemonDetails} />
    </Drawer.Navigator>
  );
};
