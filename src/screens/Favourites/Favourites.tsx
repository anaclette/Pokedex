import React from 'react';
import {
  Text,
  FlatList,
  Image,
  ImageBackground,
  View,
  Alert,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useFavourites} from '../../utils/hooks';
import PokemonCard from '../../components/PokemonCard';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './favourites.style';
import {TranslationKeys} from '../../locale/translations/keys';
import Pokeball from '../../components/Pokeball';
import metrics, {fontScale} from '../../themes/metrics';
import Button from '../../components/Button';
import colors from '../../themes/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppDispatch} from '../../state/hooks';
import {toggleIsFavourite} from '../../state/reducers/favouritesReducer';

interface Props
  extends StackScreenProps<RootStackParams, 'PokemonDetails', ''> {}

export const Favourites = ({navigation, route}: Props) => {
  const favourites = useFavourites();
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();
  const {bottom} = useSafeAreaInsets();
  // const languageOptions = useAppSelector(state => state.languages.lang); // TODO: get language endpoint from data
  const dispatch = useAppDispatch();

  const removeFavourites = () => {
    Alert.alert(
      t(TranslationKeys.DELETE_ALL_ALERT_TITLE),
      String(t(TranslationKeys.DELETE_ALL_ALERT_MESSAGE)),
      [
        {
          text: t(TranslationKeys.DELETE_ALL_OPTION_ONE)!,
          style: 'cancel',
        },
        {
          text: t(TranslationKeys.DELETE_ALL_OPTION_TWO)!,
          onPress: () => {
            favourites.forEach(favouritePokemon => {
              favourites.length !== 0 &&
                dispatch(toggleIsFavourite(favouritePokemon));
            });
          },
          style: 'destructive',
        },
      ],
    );
  };

  const showTitle = () => (
    <View style={styles.titleWrapper}>
      {favourites.length !== 0 && (
        <Button
          accessibilityRole="button"
          accessibilityLabel={t(TranslationKeys.REMOVE_ALL_FAVOURITES)}
          activeOpacity={0.6}
          onPress={() => removeFavourites()}
          underlayColor={colors.transparent}
          children={
            <Icon
              accessibilityRole="image"
              name="delete"
              size={fontScale * metrics.moderateScale(30, 0.7)}
              color={colors.dark}
            />
          }
        />
      )}
      <Text style={styles.title}>{t(TranslationKeys.MY_FAVOURITES)}</Text>
    </View>
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
          top: top + metrics.scaleVertical(130),
          paddingBottom: bottom + metrics.scaleVertical(250),
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

      <Text style={styles.subtitle}>
        {t(TranslationKeys.NO_FAVOURITES_SUBTITLE)}
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
            <Text style={styles.linkText}>
              {t(TranslationKeys.NO_FAVOURITES_LINK)}
            </Text>
          }
        />
      </Text>
    </ImageBackground>
  );
};
