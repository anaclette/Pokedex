import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, ScrollView, Alert} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './pokemonDetails.style';
import {useFullPokemon} from '../../hooks/useFullPokemon';
import {capitalizeFirstLetter, newShade} from '../../utils/helpers';
import PokemonDetailsGrid from '../../components/PokemonDetailsGrid';
import PokemonMoves from '../../components/PokemonMoves';
import PokemonStats from '../../components/PokemonStats';
import PokemonImage from '../../components/PokemonImage';
import BackButton from '../../components/BackButton';
import {height, isIos, width} from '../../common/constants';
import Pokeball from '../../components/Pokeball';
import PokemonSprites from '../../components/PokemonSprites';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {useIsFavourite} from '../../utils/hooks';
import {toggleIsFavourite} from '../../state/reducers/favouritesReducer';
import {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';
import colors from '../../themes/colors';
import globalStyles from '../../themes/globalStyles';
import metrics from '../../themes/metrics';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonDetails = ({route, navigation}: Props) => {
  const {pokemonDetails, imgColor, textColor} = route.params;
  const [fullMoves, setFullMoves] = useState(false);
  const {top} = useSafeAreaInsets();
  const {isLoading, fullPokemon} = useFullPokemon(pokemonDetails.id);
  const [typeColor, setTypeColor] = useState('');
  const dispatch = useAppDispatch();
  const isFavourite = useIsFavourite(pokemonDetails.id);
  const username = useAppSelector(state => state.auth.username);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {t} = useTranslation();

  // console.log('full pokemon details: ', fullPokemon.name); // TODO: check why this executing thrice, 1st undefined and then twice

  const onFullMovesBtnPress = () => {
    setFullMoves(!fullMoves);
  };

  const getTypes = () => {
    return fullPokemon.types?.map((typeGroup, index) => (
      <View
        key={typeGroup + index.toString()}
        style={[
          {...styles.typeItemWrapper, backgroundColor: typeColor},
          index !== 0 && {...styles.marginLeft},
        ]}>
        <Text style={{color: textColor, ...styles.typeItem}} key={index}>
          {typeGroup.type.name}
        </Text>
      </View>
    ));
  };

  useEffect(() => {
    setTypeColor(newShade(imgColor, 50));
    username ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [imgColor, username]);

  return (
    <View
      style={{
        backgroundColor: imgColor,
        ...styles.container,
      }}>
      <PokemonImage route={route} navigation={navigation} />
      <View
        style={{
          ...styles.topButtonsWrapper,
          marginTop: isIos
            ? top + metrics.scaleVertical(10)
            : top + metrics.scaleVertical(20),
        }}>
        <BackButton
          onPress={() => navigation.goBack()}
          underlayColor={imgColor}
          iconColor={textColor}
          buttonStyle={{left: width * 0.02}}
          iconStyle={{
            ...globalStyles.textShadow,
          }}
        />
        <Button
          accessibilityRole="button"
          accessibilityLabel={t(
            TranslationKeys.ACCESSIBILITY_LABEL_FAVOURITES_ICON,
          )}
          activeOpacity={0.6}
          onPress={() => {
            isLoading
              ? Alert.alert(t(TranslationKeys.STILL_LOADING_WARNING))
              : isLoggedIn
              ? dispatch(toggleIsFavourite(pokemonDetails))
              : Alert.alert(
                  t(TranslationKeys.ADD_FAVOURITE_LOGIN_WARNING, {
                    PokemonName: capitalizeFirstLetter(fullPokemon.name),
                  }),
                );
          }}
          children={
            <Icon
              accessibilityRole="image"
              style={globalStyles.textShadow}
              name={isFavourite ? 'heart' : 'heart-outline'}
              size={25}
              color={isFavourite ? colors.favouriteColor : textColor}
            />
          }
          style={{
            right: width * 0.1,
          }}
          underlayColor={colors.transparent}
        />
      </View>

      <View style={styles.nameAndTypesWrapper}>
        <Text
          style={{
            ...styles.name,
            color: textColor,
            ...globalStyles.textShadow,
          }}>
          {pokemonDetails.name}
        </Text>
        <View style={styles.rowContainer}>{getTypes()}</View>
      </View>
      <Pokeball
        style={{width: width / 1.8, height: height / 4, ...styles.pokeballImg}}
        source={require('../../assets/images/light_pokeball.png')}
      />

      {isLoading ? (
        <ActivityIndicator
          color={textColor}
          size={50}
          style={{
            top: height * 0.25,
            ...styles.loader,
          }}
        />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: textColor,
            ...styles.scrollView,
          }}>
          <PokemonDetailsGrid
            pokemon={fullPokemon}
            lightColor={typeColor}
            darkColor={textColor}
          />

          <PokemonMoves
            pokemon={fullPokemon}
            onFullMovesPress={onFullMovesBtnPress}
            fullMoves={fullMoves}
            textColor={textColor}
            titleColor={typeColor}
          />

          <PokemonStats
            color={typeColor}
            pokemon={fullPokemon}
            titleColor={typeColor}
          />
          <PokemonSprites pokemon={fullPokemon} />
        </ScrollView>
      )}
    </View>
  );
};
