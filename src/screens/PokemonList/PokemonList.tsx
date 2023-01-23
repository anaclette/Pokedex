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
      <PokemonPoster viewTop={top * 1.9} imgHeight={height / 4} />
      <FlatList
        numColumns={2}
        contentContainerStyle={{top: top * 6.5}}
        showsVerticalScrollIndicator={false}
        data={pokeList.sort((pokeA, pokeB) =>
          pokeA.name.localeCompare(pokeB.name),
        )}
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
    </>
  );
};
