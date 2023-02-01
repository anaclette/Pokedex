import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {NewListPokemon} from '../../types/Pokemon';
import ImageColors from 'react-native-image-colors';
import FadeInImage from '../FadeInImage';
import {styles} from './pokemonCard.style';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import Pokeball from '../Pokeball';
import {height, width} from '../../common/constants';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {
  item: NewListPokemon;
  imgColor: string | undefined;
  textColor: string | undefined;
  isFavourite?: boolean;
}

const windowWidth = width;
const windowHeight = height;

export const PokemonCard = ({item, navigation, isFavourite}: Props) => {
  const [backgroundImgColor, setBackgroundImgColor] = useState('grey');
  const [titleColor, setTitleColor] = useState<string | undefined>('white');

  const onPress = () => {
    navigation.navigate('PokemonDetails', {
      pokemonDetails: item,
      imgColor: backgroundImgColor,
      textColor: titleColor,
    });
  };

  useEffect(() => {
    ImageColors.getColors(item.picture, {fallback: 'grey'}).then(colors => {
      if (colors.platform === 'android') {
        setBackgroundImgColor(colors.dominant || 'grey');
        setTitleColor(colors.average || 'grey');
      } else if (colors.platform === 'ios') {
        setBackgroundImgColor(colors.background);
        setTitleColor(colors.detail);
      }
    });
  }, [item.picture]);

  return (
    <TouchableOpacity
      key={item.id}
      activeOpacity={0.8}
      style={[
        styles.container,
        {backgroundColor: backgroundImgColor},
        isFavourite && styles.favouritePokeCard,
      ]}
      onPress={onPress}>
      <View
        style={[
          styles.nameWrapper,
          isFavourite && styles.favouritePokeNameWrapper,
        ]}>
        <Text
          style={[
            {color: titleColor, ...styles.name},
            isFavourite && styles.favouritePokeName,
          ]}>
          {item.name}
        </Text>
        <Text style={{color: titleColor, ...styles.id}}>#{item.id}</Text>
      </View>
      <View style={styles.imagesWrapper}>
        <Pokeball
          style={[
            styles.pokeballImage,
            isFavourite && styles.favouritePokeballImage,
          ]}
          source={require('../../assets/images/light_pokeball.png')}
        />
        <FadeInImage
          uri={item.picture}
          containerStyle={[
            {width: windowWidth / 3, height: windowHeight / 7},
            isFavourite && styles.favouritePokemonImageContainer,
          ]}
          imgStyle={styles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
};
