import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {usePokemon} from '../../hooks/usePokemon';
import {NewListPokemon} from '../../types/Pokemon';
import {styles} from './pokemonList.style';

const renderItem = ({item}: {item: NewListPokemon}) => {
  return <PokemonCard item={item} />;
};

export const PokemonList = () => {
  const {pokeList, loadPokemons} = usePokemon();
  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={pokeList}
      keyExtractor={pokemon => pokemon.id}
      renderItem={renderItem}
      onEndReached={loadPokemons}
      onEndReachedThreshold={0.4}
      ListFooterComponent={
        <ActivityIndicator
          size={20}
          color={'green'}
          style={styles.loaderHeight}
        />
      }
    />
  );
};
