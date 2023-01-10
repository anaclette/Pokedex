import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';

import {NewListPokemon} from '../../types/Pokemon';
import FadeInImage from '../FadeInImage';
import {styles} from './pokemonCard.style';

interface Props {
  item: NewListPokemon;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const PokemonCard = ({item}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <FadeInImage
        uri={item.picture}
        containerStyle={{width: windowWidth / 2.2, height: windowHeight / 5}}
        imgStyle={styles.pokemonImage}
      />
      <Text>{item.name}</Text>
      <Text>#{item.id}</Text>
    </TouchableOpacity>
  );
};
