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
        source={require('../../assets/images/pokemon-poster.png')}
        style={{
          ...styles.poster,
          height: imgHeight,
        }}
      />
    </View>
  );
};
