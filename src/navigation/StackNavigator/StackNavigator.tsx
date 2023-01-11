import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import {NewListPokemon} from '../../types/Pokemon';
import PokemonList from '../../screens/PokemonList';
import PokemonDetails from '../../screens/PokemonDetails';

export type RootStackParams = {
  Home: undefined;
  PokemonList: undefined;
  PokemonDetails: {pokemonDetails: NewListPokemon};
};

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
    </Stack.Navigator>
  );
};
