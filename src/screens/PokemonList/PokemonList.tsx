import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Appearance, View} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {usePokemon} from '../../hooks/usePokemon';
import {NewListPokemon} from '../../types/Pokemon';
import {styles} from './pokemonList.style';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PokemonPoster from '../../components/PokemonPoster';
import {height} from '../../themes/metrics';
import colors from '../../themes/colors';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonList = ({navigation, route}: Props) => {
  const {pokeList, loadPokemons} = usePokemon();
  const {top} = useSafeAreaInsets();
  const pokePosterHeight = height / 2.5;
  const [backgroundColor, setBackgroundColor] = useState(
    colors.translucidLightBackground,
  );
  const darkMode = Appearance.getColorScheme() === 'dark';

  useEffect(() => {
    if (darkMode) {
      setBackgroundColor(colors.black);
    } else {
      setBackgroundColor(colors.lightOcean);
    }
  }, [darkMode]);

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

  const showLoader = (isFooter?: boolean) => (
    <ActivityIndicator
      size={20}
      color={!darkMode ? colors.black : colors.white}
      style={isFooter ? styles.footerLoader : styles.loader}
    />
  );

  return (
    <View style={{backgroundColor: backgroundColor, ...styles.container}}>
      <PokemonPoster viewTop={top} imgHeight={pokePosterHeight} />
      <FlatList
        numColumns={2}
        contentContainerStyle={{
          top: top + pokePosterHeight / 2,
        }}
        showsVerticalScrollIndicator={false}
        // data={pokeList.sort(
        //   (pokeA, pokeB) => pokeA.name.localeCompare(pokeB.name),
        //    TODO: fix how this is currently working
        // )}
        data={pokeList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={showLoader(true)}
      />
    </View>
  );
};
