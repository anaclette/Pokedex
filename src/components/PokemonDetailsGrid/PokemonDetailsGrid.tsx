import React from 'react';
import {Text, View} from 'react-native';
import {PokemonFullDetails} from '../../types/Pokemon';
import {convertDcToCm, convertLbToKg} from '../../utils/helpers';
import {styles} from './pokemonDetailsGrid.style';

interface Props {
  pokemon: PokemonFullDetails;
  backgroundColor: string | undefined;
  textColor: string | undefined;
}

export const PokemonDetailsGrid = ({
  pokemon,
  backgroundColor,
  textColor,
}: Props) => {
  const moreThanOneType = pokemon.types?.length > 1;

  const getTypes = () => {
    return pokemon.types.map((typeGroup, index) => (
      <Text style={{color: textColor, ...styles.listItem}} key={index}>
        {typeGroup.type.name}
      </Text>
    ));
  };
  return (
    <View style={styles.container}>
      <View style={{backgroundColor, ...styles.columnWrapper}}>
        <>
          <Text style={styles.title}>{moreThanOneType ? 'Tipos' : 'Tipo'}</Text>
          {getTypes()}
        </>
      </View>
      <View style={{backgroundColor, ...styles.columnWrapper}}>
        <Text style={styles.title}>Peso</Text>
        <Text style={{color: textColor, ...styles.listItem}}>
          {convertLbToKg(pokemon.weight)} kg
        </Text>
      </View>
      <View style={{backgroundColor, ...styles.columnWrapper}}>
        <Text style={styles.title}>Altura</Text>
        <Text style={{color: textColor, ...styles.listItem}}>
          {convertDcToCm(pokemon.height)} cm
        </Text>
      </View>
    </View>
  );
};
