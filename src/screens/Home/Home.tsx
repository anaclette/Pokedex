import React from 'react';
import {ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './home.style';

export const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/pikachu.jpeg')}
      style={styles.container}>
      <Icon
        name="pokeball"
        color={'white'}
        size={100}
        style={styles.pokeballIcon}
      />
    </ImageBackground>
  );
};
