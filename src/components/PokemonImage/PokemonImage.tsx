import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {height, isIos, width} from '../../common/constants';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import FadeInImage from '../FadeInImage';
import {styles} from './pokemonImage.style';

interface Props extends DrawerScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonImage = ({route}: Props) => {
  const {pokemonDetails} = route.params;
  const {top} = useSafeAreaInsets();

  return (
    <FadeInImage
      uri={pokemonDetails.picture}
      containerStyle={styles.imageContainer}
      imgStyle={{
        width: width * 0.6,
        height: height / 3.4,
        top: isIos ? top * 3.5 : top + 150,
      }}
    />
  );
};
