import React from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import {useFavourites} from '../../utils/hooks';
import PokemonCard from '../../components/PokemonCard';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './favourites.style';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const Favourites = ({navigation, route}: Props) => {
  const favourites = useFavourites();
  const {top} = useSafeAreaInsets();
  return favourites?.length ? (
    <>
      <FlatList
        numColumns={2}
        contentContainerStyle={{top: top}}
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
    <View style={{...styles.noFavsContainer, top: top}}>
      <Text>Mis favoritos</Text>

      <Text>
        Todavía no tenés favoritos. Empezá a elegirlos en el
        <TouchableWithoutFeedback onPress={() => undefined}>
          <Text> pokedex</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
};
