import React from 'react';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import FadeInImage from '../FadeInImage';
import {styles} from './pokemonImage.style';
import {StackScreenProps} from '@react-navigation/stack';
import metrics, {height} from '../../themes/metrics';
import {PixelRatio} from 'react-native';
import {isIos} from '../../common/constants';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonImage = ({route}: Props) => {
  const {pokemonDetails} = route.params;
  const size = !isIos
    ? PixelRatio.getPixelSizeForLayoutSize(metrics.moderateScale(115))
    : PixelRatio.getPixelSizeForLayoutSize(metrics.moderateScale(100));

  return (
    <FadeInImage
      uri={pokemonDetails.picture}
      containerStyle={{
        ...styles.imageContainer,
        width: size,
        height: size,
        top: !isIos ? height * 0.2 : height * 0.28,
      }}
      imgStyle={{
        ...styles.image,
      }}
    />
  );
};
