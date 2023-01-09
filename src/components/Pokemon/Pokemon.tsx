import React from 'react';
import {Text, View, FlatList, Image, ActivityIndicator} from 'react-native';
import {styles} from './pokemon.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {usePokemon} from '../../hooks/usePokemon';
import {NewListPokemon} from '../../types/Pokemon';

const renderItem = ({item}: {item: NewListPokemon}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>{item.name}</Text>
      <Image source={{uri: item.picture}} style={{width: 50, height: 50}} />
    </View>
  );
};

export const Pokemon = () => {
  const {pokeList, loadPokemons} = usePokemon();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon</Text>
      <Icon name="pokeball" color={'white'} size={25} />
      <FlatList
        numColumns={3}
        showsVerticalScrollIndicator={false}
        data={pokeList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={renderItem}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator size={20} color={'green'} style={{height: 300}} />
        }
      />
    </View>
  );
};
