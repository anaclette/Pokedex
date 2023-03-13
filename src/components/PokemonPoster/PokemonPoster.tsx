import React from 'react';
import {View, Image, StyleProp} from 'react-native';
import {styles} from './pokemonPoster.style';

interface Props {
  viewTop: number;
  imgHeight: number;
  style?: StyleProp<any>;
}

export const PokemonPoster = ({viewTop, imgHeight, style}: Props) => {
  return (
    <View style={{...style, top: viewTop}}>
      <Image
        accessibilityRole="image"
        accessibilityLabel="Pokedex header image"
        source={require('../../assets/images/poster.png')}
        style={{
          ...styles.poster,
          height: imgHeight,
        }}
      />
    </View>
  );
};
