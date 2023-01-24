import React from 'react';
import {ActivityIndicator, FlatList, useWindowDimensions} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {usePokemon} from '../../hooks/usePokemon';
import {NewListPokemon} from '../../types/Pokemon';
import {styles} from './pokemonList.style';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PokemonPoster from '../../components/PokemonPoster';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonList = ({navigation, route}: Props) => {
  const {pokeList, loadPokemons} = usePokemon();
  const {top} = useSafeAreaInsets();
  const height = useWindowDimensions().height;
  const pokePosterHeight = height / 4;

  const renderItem = ({item}: {item: NewListPokemon}) => {
    return (
      <PokemonCard
        navigation={navigation}
        item={item}
        imgColor={item.imgColor}
        route={route}
        textColor={item.textColor}
      />
    );
  };

  return (
    <>
      <PokemonPoster viewTop={top} imgHeight={pokePosterHeight} />
      <FlatList
        numColumns={2}
        contentContainerStyle={{top: top + pokePosterHeight}}
        showsVerticalScrollIndicator={false}
        data={pokeList.sort(
          (pokeA, pokeB) => pokeA.name.localeCompare(pokeB.name),
          // TODO: fix how this is currently working
        )}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator size={20} color={'green'} style={styles.loader} />
        }
      />
    </>
  );
};
