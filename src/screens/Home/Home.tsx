import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {styles} from './home.style';

export const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/pikachu.jpeg')}
      style={styles.container}>
      <Image
        source={require('../../assets/pokebola.png')}
        style={styles.pokeballImg}
      />
    </ImageBackground>
  );
};
