import React from 'react';
import {
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useFavourites} from '../../utils/hooks';
import PokemonCard from '../../components/PokemonCard';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './favourites.style';
// import {useAppSelector} from '../../state/hooks';
import {TranslationKeys} from '../../locale/translations/keys';
import Pokeball from '../../components/Pokeball';

interface Props
  extends StackScreenProps<RootStackParams, 'PokemonDetails', ''> {}

export const Favourites = ({navigation, route}: Props) => {
  const favourites = useFavourites();
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();
  // const languageOptions = useAppSelector(state => state.languages.lang); // TODO: get language endpoint from data

  const showTitle = () => (
    <Text style={styles.title}>{t(TranslationKeys.MY_FAVOURITES)}</Text>
  );
  return favourites?.length ? (
    <>
      <Image
        source={require('../../assets/images/pikachu.jpeg')}
        style={styles.backgroundImage}
      />
      <Pokeball
        style={styles.pokeballImg}
        source={require('../../assets/images/dark_pokeball.png')}
      />
      {showTitle()}
      <FlatList
        numColumns={2}
        data={favourites}
        contentContainerStyle={{top: top * 3, ...styles.container}}
        renderItem={({item}) => (
          <PokemonCard
            isFavourite
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
    <ImageBackground
      source={require('../../assets/images/pokeball_wallpaper.jpeg')}
      style={{...styles.noFavsContainer, paddingTop: top}}>
      {showTitle()}

      <Text style={styles.subtitle}>
        {t(TranslationKeys.NO_FAVOURITES_SUBTITLE)}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Pokedex')}>
          <Text style={styles.linkText}>
            {t(TranslationKeys.NO_FAVOURITES_LINK)}
          </Text>
        </TouchableWithoutFeedback>
      </Text>
    </ImageBackground>
  );
};
