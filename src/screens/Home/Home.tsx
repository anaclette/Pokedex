import React from 'react';
import {ImageBackground} from 'react-native';
import {styles} from './home.style';
import {Pokeball} from '../../components/Pokeball/Pokeball';

export const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/pikachu.jpeg')}
      style={styles.container}>
      <Pokeball
        style={styles.pokeballImg}
        source={require('../../assets/images/dark_pokeball.png')}
      />
    </ImageBackground>
  );
};
