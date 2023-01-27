import React from 'react';
import {Text, View} from 'react-native';
import {PokemonFullDetails} from '../../types/Pokemon';
import {convertDcToCm, convertLbToKg} from '../../utils/helpers';
import PokemonAbilities from '../PokemonAbilities';
import {styles} from './pokemonDetailsGrid.style';

interface Props {
  pokemon: PokemonFullDetails;
  lightColor: string | undefined;
  darkColor: string | undefined;
}

export const PokemonDetailsGrid = ({pokemon, darkColor, lightColor}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: lightColor, ...styles.title}}>Peso</Text>
        <Text style={{color: lightColor, ...styles.listItem}}>
          {convertLbToKg(pokemon.weight)} kg
        </Text>
      </View>
      <View>
        <Text style={{color: lightColor, ...styles.title}}>Altura</Text>
        <Text style={{color: lightColor, ...styles.listItem}}>
          {convertDcToCm(pokemon.height)} cm
        </Text>
      </View>
      <PokemonAbilities
        pokemon={pokemon}
        backgroundColor={lightColor}
        textColor={darkColor}
      />
    </View>
  );
};
