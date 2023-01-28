import React from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import {useFavourites} from '../../utils/hooks';
import PokemonCard from '../../components/PokemonCard';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const Favourites = ({navigation, route}: Props) => {
  const favourites = useFavourites();
  return favourites?.length ? (
    <>
      <FlatList
        data={favourites}
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
    </>
  ) : (
    <View>
      <Text>Mis favoritos</Text>

      <Text>
        Todavía no tenés favoritos. Empezá a elegirlos en el
        <TouchableWithoutFeedback onPress={() => undefined}>
          <Text>pokedex</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
};
