import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import SearchInput from '../../components/SearchInput';
import {usePokemonSearch} from '../../hooks/usePokemonSearch';
import {styles} from './search.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NewListPokemon} from '../../types/Pokemon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import PokemonPoster from '../../components/PokemonPoster';
import {height} from '../../common/constants';

interface NavProps
  extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator color={'red'} size={20} />
    </View>
  );
};

export const Search = ({navigation, route}: NavProps) => {
  const {isFetching, pokemonList} = usePokemonSearch();
  const [searchValue, setSearchValue] = useState('');
  const [filteredPokemonResult, setFilteredPokemonResult] = useState<
    NewListPokemon[]
  >([]);
  const {top} = useSafeAreaInsets();
  const pokePosterHeight = height / 4;

  useEffect(() => {
    if (searchValue.length === 0) {
      return setFilteredPokemonResult([]);
    }

    setFilteredPokemonResult(
      pokemonList.filter(pokemon => pokemon.name.includes(searchValue)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <PokemonPoster
        viewTop={top + pokePosterHeight / 3.5}
        imgHeight={pokePosterHeight}
      />
      <SearchInput onDebounce={setSearchValue} />

      {isFetching ? (
        // TODO: fix loader showing on render instead of on search
        <Loader />
      ) : (
        <FlatList
          contentContainerStyle={{
            top: top + pokePosterHeight * 1.3,
            paddingBottom: height * 0.6,
          }}
          data={filteredPokemonResult}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <PokemonCard
              item={item}
              imgColor={item.imgColor}
              textColor={item.textColor}
              navigation={navigation}
              route={route}
            />
          )}
        />
      )}
    </View>
  );
};
