import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';

interface Props extends DrawerScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonDetails = ({route}: Props) => {
  const details = route.params.pokemonDetails;

  return (
    <SafeAreaView>
      <Text>{details.name}</Text>
      <Text>{details.id}</Text>
    </SafeAreaView>
  );
};
