import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './home.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PokemonList from '../PokemonList';

export const Home = () => {
  const {top} = useSafeAreaInsets();

  return (
    <SafeAreaView style={[{top: top}]}>
      <Icon name="bat" size={30} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Pokedex</Text>
        <Icon name="pokeball" size={25} />
      </View>
      <View style={styles.imgWrapper}>
        <Image
          source={require('../../assets/pokebola.png')}
          style={styles.pokeimg}
        />
      </View>
      <PokemonList />
    </SafeAreaView>
  );
};
