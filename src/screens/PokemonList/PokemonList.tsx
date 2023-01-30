import React, {useCallback, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {usePokemon} from '../../hooks/usePokemon';
import {NewListPokemon} from '../../types/Pokemon';
import {styles} from './pokemonList.style';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PokemonPoster from '../../components/PokemonPoster';
import {height} from '../../common/constants';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonList = ({navigation, route}: Props) => {
  const {pokeList, loadPokemons, isLoading} = usePokemon();
  const [refreshing, setRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const loading = refreshing || isLoading;

  const showLoader = (isFooter?: boolean) => (
    <ActivityIndicator
      size={20}
      color={'darkblue'}
      style={isFooter ? styles.footerLoader : styles.loader}
    />
  );

  return (
    <>
      <PokemonPoster viewTop={top} imgHeight={pokePosterHeight} />
      {!loading ? (
        <FlatList
          numColumns={2}
          contentContainerStyle={{top: top + pokePosterHeight}}
          showsVerticalScrollIndicator={false}
          // data={pokeList.sort(
          //   (pokeA, pokeB) => pokeA.name.localeCompare(pokeB.name),
          //    TODO: fix how this is currently working
          // TODO: concat next page results onEndReached once data is retrieved from state
          // )}
          data={pokeList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          onRefresh={onRefresh}
          refreshing={refreshing}
          ListFooterComponent={showLoader(true)}
        />
      ) : (
        showLoader()
      )}
    </>
  );
};
