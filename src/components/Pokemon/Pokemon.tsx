import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './pokemon.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Pokemon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon</Text>
      <Icon name="pokeball" color={'white'} size={25} />
    </View>
  );
};
