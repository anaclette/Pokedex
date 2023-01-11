import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {usePokemon} from '../../hooks/usePokemon';
import {NewListPokemon} from '../../types/Pokemon';
import {styles} from './pokemonList.style';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonList = ({navigation}: Props) => {
  const {pokeList, loadPokemons} = usePokemon();

  const renderItem = ({item}: {item: NewListPokemon}) => {
    const onPress = () => {
      navigation.navigate('PokemonDetails', {pokemonDetails: item});
    };
    return <PokemonCard onPress={onPress} item={item} />;
  };

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
