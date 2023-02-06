import React from 'react';
import {Text, FlatList, Image, ImageBackground, View} from 'react-native';
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
import {isIos} from '../../common/constants';
import metrics from '../../themes/metrics';
import Button from '../../components/Button';
import colors from '../../themes/colors';

interface Props
  extends StackScreenProps<RootStackParams, 'PokemonDetails', ''> {}

export const Favourites = ({navigation, route}: Props) => {
  const favourites = useFavourites();
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();
  const {bottom} = useSafeAreaInsets();
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
        contentContainerStyle={{
          top: isIos ? top * 3 : top + metrics.scaleVertical(130),
          paddingBottom: isIos
            ? bottom + metrics.scaleVertical(200)
            : bottom + metrics.scaleVertical(250),
        }}
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

      <View style={styles.subtitleWrapper}>
        <Text
          style={{
            fontSize: isIos
              ? metrics.scaledFontSize(15)
              : metrics.scaledFontSize(25),
            ...styles.subtitle,
          }}>
          {t(TranslationKeys.NO_FAVOURITES_SUBTITLE)}
        </Text>
        <Button
          style={styles.navigateToPokedexButton}
          accessibilityRole="link"
          accessibilityLabel={t(
            TranslationKeys.NAVIGATE_TO_POKEDEX_BUTTON_LABEL,
          )}
          activeOpacity={0.7}
          underlayColor={colors.white}
          onPress={() => navigation.navigate('Pokedex')}
          children={
            <Text
              style={{
                fontSize: isIos
                  ? metrics.scaledFontSize(15)
                  : metrics.scaledFontSize(25),
                ...styles.linkText,
              }}>
              {t(TranslationKeys.NO_FAVOURITES_LINK)}
            </Text>
          }
        />
      </View>
    </ImageBackground>
  );
};
