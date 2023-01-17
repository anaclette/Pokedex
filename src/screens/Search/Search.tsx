import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import SearchInput from '../../components/SearchInput';
import {usePokemonSearch} from '../../hooks/usePokemonSearch';
import {styles} from './search.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NewListPokemon} from '../../types/Pokemon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {Dimensions} from 'react-native';

interface NavProps
  extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator color={'red'} size={20} />
      <Text>Loading...</Text>
    </View>
  );
};

const {height} = Dimensions.get('window');

export const Search = ({navigation, route}: NavProps) => {
  const {isFetching, pokemonList} = usePokemonSearch();
  const [searchValue, setSearchValue] = useState('');
  const [filteredPokemonResult, setFilteredPokemonResult] = useState<
    NewListPokemon[]
  >([]);
  const {top} = useSafeAreaInsets();

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
      <SearchInput onDebounce={setSearchValue} />

      {isFetching ? (
        <Loader />
      ) : (
        <FlatList
          contentContainerStyle={{
            top: top + 50,
            paddingBottom: height * 0.3,
          }}
          data={filteredPokemonResult}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <PokemonCard
              item={item}
              imgColor={item.picture}
              textColor={undefined}
              navigation={navigation}
              route={route}
            />
          )}
        />
      )}
    </View>
  );
};
