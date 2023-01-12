import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {usePokemon} from '../../hooks/usePokemon';
import {NewListPokemon} from '../../types/Pokemon';
import {styles} from './pokemonList.style';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonList = ({navigation, route}: Props) => {
  const {pokeList, loadPokemons} = usePokemon();

  const renderItem = ({item}: {item: NewListPokemon}) => {
    return (
      <PokemonCard
        navigation={navigation}
        item={item}
        imgColor={item.imgColor}
        route={route}
        textColor={undefined}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={pokeList}
      keyExtractor={(_, index) => index.toString()}
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
