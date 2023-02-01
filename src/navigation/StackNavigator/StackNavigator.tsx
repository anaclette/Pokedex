import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NewListPokemon} from '../../types/Pokemon';
import PokemonDetails from '../../screens/PokemonDetails';
import Tabs from '../Tabs';

export type RootStackParams = {
  PokemonDetails: {
    pokemonDetails: NewListPokemon;
    imgColor: string | undefined;
    textColor: string | undefined;
  };
  Pokedex: undefined;
};

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
    </Stack.Navigator>
  );
};
