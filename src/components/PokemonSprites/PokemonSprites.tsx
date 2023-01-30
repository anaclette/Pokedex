import React from 'react';
import {ScrollView} from 'react-native';
import {width, height} from '../../common/constants';
import {PokemonFullDetails} from '../../types/Pokemon';
import {isValid} from '../../utils/helpers';
import FadeInImage from '../FadeInImage';
import {styles} from './pokemonSprites.style';

interface SpritesProps {
  pokemon: PokemonFullDetails;
}

const getSprites = (sprites: Object) => {
  const pokemonImages = Object.values(sprites);
  return pokemonImages
    .slice(0, 8)
    .map(
      (image, index) =>
        isValid(image) && (
          <FadeInImage
            key={index}
            uri={image}
            containerStyle={{
              width: width * 0.2,
              height: height * 0.1,
            }}
            imgStyle={styles.spriteImg}
          />
        ),
    )
    .reverse();
};

export const PokemonSprites = ({pokemon}: SpritesProps) => {
  return (
    <ScrollView
      style={styles.spritesContainer}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {pokemon.sprites && getSprites(pokemon.sprites)}
    </ScrollView>
  );
};
