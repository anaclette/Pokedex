import React from 'react';
import {Text, View} from 'react-native';
import {PokemonFullDetails} from '../../types/Pokemon';
import {styles} from './pokemonAbilities.style';

interface Props {
  pokemon: PokemonFullDetails;
  backgroundColor: string | undefined;
  textColor: string | undefined;
}

export const PokemonAbilities = ({
  pokemon,
  backgroundColor,
  textColor,
}: Props) => {
  return (
    <View style={{backgroundColor, ...styles.abilitiesWrapper}}>
      <Text style={{color: textColor, ...styles.title}}>Habilidades</Text>
      {pokemon.abilities.map((ability, index) => (
        <Text
          key={ability.ability.name + index.toString()}
          style={{color: textColor, ...styles.listItem}}>
          {ability.ability.name}
        </Text>
      ))}
    </View>
  );
};
