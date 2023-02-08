import React from 'react';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import FadeInImage from '../FadeInImage';
import {styles} from './pokemonImage.style';
import {StackScreenProps} from '@react-navigation/stack';
import metrics, {height} from '../../themes/metrics';
import {PixelRatio} from 'react-native';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonImage = ({route}: Props) => {
  const {pokemonDetails} = route.params;
  const size = PixelRatio.getPixelSizeForLayoutSize(metrics.moderateScale(120));

  return (
    <FadeInImage
      uri={pokemonDetails.picture}
      containerStyle={{
        ...styles.imageContainer,
        width: size,
        height: size,
        top: height * 0.2,
      }}
      imgStyle={{
        ...styles.image,
      }}
    />
  );
};
