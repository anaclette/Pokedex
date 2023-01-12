import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NewListPokemon} from '../../types/Pokemon';
import PokemonDetails from '../../screens/PokemonDetails';
import DrawerNavigator from '../DrawerNavigator';

export type RootStackParams = {
  PokemonDetails: {
    pokemonDetails: NewListPokemon;
    imgColor: string | undefined;
    textColor: string | undefined;
  };
};

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
    </Stack.Navigator>
  );
};
