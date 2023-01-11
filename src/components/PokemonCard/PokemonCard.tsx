import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';

import {NewListPokemon} from '../../types/Pokemon';
import ImageColors from 'react-native-image-colors';
import FadeInImage from '../FadeInImage';
import {styles} from './pokemonCard.style';

interface Props {
  item: NewListPokemon;
  onPress: () => void;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const PokemonCard = ({item, onPress}: Props) => {
  const [backgroundImgColor, setBackgroundImgColor] = useState('grey');
  const [titleColor, setTitleColor] = useState<string | undefined>('white');

  useEffect(() => {
    ImageColors.getColors(item.picture, {fallback: 'grey'}).then(colors => {
      if (colors.platform === 'android') {
        setBackgroundImgColor(colors.dominant || 'grey');
        setTitleColor(colors.lightMuted || 'grey');
      } else if (colors.platform === 'ios') {
        setBackgroundImgColor(colors.background);
        setTitleColor(colors.detail);
      }
    });
  }, [item.picture]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, {backgroundColor: backgroundImgColor}]}
      onPress={onPress}>
      <View style={styles.nameWrapper}>
        <Text style={[{color: titleColor}, styles.name]}>{item.name}</Text>
        <Text style={[{color: titleColor}, styles.id]}>#{item.id}</Text>
      </View>
      <View style={styles.imagesWrapper}>
        <Image
          source={require('../../assets/pokebola-blanca.png')}
          style={styles.pokebolaImage}
        />
        <FadeInImage
          uri={item.picture}
          containerStyle={{width: windowWidth / 3, height: windowHeight / 7}}
          imgStyle={styles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
};
