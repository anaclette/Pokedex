import React from 'react';
import {ImageStyle, StyleProp, Image, ImageSourcePropType} from 'react-native';

interface PokeballProps {
  style: StyleProp<ImageStyle>;
  source: ImageSourcePropType | undefined;
}

export const Pokeball = ({style, source}: PokeballProps) => {
  return (
    <Image
      accessibilityRole="image"
      accessibilityLabel="Pokeball image"
      source={source}
      style={style}
    />
  );
};
