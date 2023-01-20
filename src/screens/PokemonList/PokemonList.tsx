import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  useWindowDimensions,
  View,
} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {usePokemon} from '../../hooks/usePokemon';
import {NewListPokemon} from '../../types/Pokemon';
import {styles} from './pokemonList.style';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
        textColor={undefined}
      />
    );
  };

  return (
    <>
      <View style={{top: top * 1.9}}>
        <Image
          source={require('../../assets/images/poster.jpeg')}
          style={{
            ...styles.poster,
            height: height / 4,
          }}
        />
      </View>
      <FlatList
        numColumns={2}
        contentContainerStyle={{top: top * 6.5}}
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
    </>
  );
};
