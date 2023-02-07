import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIos} from '../../common/constants';
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
        width: metrics.moderateScale(200, 0.8),
        height: metrics.verticalScale(200),
        top: isIos ? top * 2.8 : top + metrics.verticalScale(110),
      }}
      imgStyle={{
        ...styles.image,
      }}
    />
  );
};
