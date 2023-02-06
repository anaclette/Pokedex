import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIos, width} from '../../common/constants';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import FadeInImage from '../FadeInImage';
import {styles} from './pokemonImage.style';
import {StackScreenProps} from '@react-navigation/stack';
import metrics from '../../themes/metrics';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonImage = ({route}: Props) => {
  const {pokemonDetails} = route.params;
  const {top} = useSafeAreaInsets();

  return (
    <FadeInImage
      uri={pokemonDetails.picture}
      containerStyle={{
        ...styles.imageContainer,
        width: width * 0.6,
        height: metrics.scaleVertical(240),
        top: isIos ? top * 3.5 : top + metrics.scaleVertical(60),
      }}
      imgStyle={{
        ...styles.image,
      }}
    />
  );
};
