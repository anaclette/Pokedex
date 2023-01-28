import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, ScrollView} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './pokemonDetails.style';
import {useFullPokemon} from '../../hooks/useFullPokemon';
import {newShade} from '../../utils/helpers';
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
import {useAppDispatch} from '../../state/hooks';
import {useIsFavourite} from '../../utils/hooks';
import {toggleIsFavourite} from '../../state/reducers/favouritesReducer';

interface Props extends DrawerScreenProps<RootStackParams, 'PokemonDetails'> {}

export const PokemonDetails = ({route, navigation}: Props) => {
  const {pokemonDetails, imgColor, textColor} = route.params;
  const [fullMoves, setFullMoves] = useState(false);
  const {top} = useSafeAreaInsets();
  const {isLoading, fullPokemon} = useFullPokemon(pokemonDetails.id);
  const [typeColor, setTypeColor] = useState('');
  const dispatch = useAppDispatch();
  const isFavourite = useIsFavourite(pokemonDetails.id);

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
  }, [imgColor]);

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
          marginTop: isIos ? top + 15 : top + 30,
        }}>
        <BackButton
          onPress={() => navigation.goBack()}
          underlayColor={imgColor}
          iconColor={textColor}
          buttonStyle={{left: width * 0.02}}
        />
        <Button
          accessibilityLabel={'Add to favourites heart icon'}
          activeOpacity={0.6}
          onPress={() => dispatch(toggleIsFavourite(pokemonDetails))}
          children={
            <Icon
              name={isFavourite ? 'heart' : 'heart-outline'}
              size={25}
              color={isFavourite ? 'red' : textColor}
            />
          }
          style={{
            right: width * 0.1,
            ...styles.favouriteIconButton,
          }}
          underlayColor={typeColor}
        />
      </View>

      <View style={styles.nameAndTypesWrapper}>
        <Text style={{...styles.name, color: textColor}}>
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
            lightColor={imgColor}
            darkColor={textColor}
          />

          <PokemonMoves
            pokemon={fullPokemon}
            onFullMovesPress={onFullMovesBtnPress}
            fullMoves={fullMoves}
            textColor={textColor}
            imgColor={imgColor}
          />

          <PokemonStats pokemon={fullPokemon} />
          <PokemonSprites pokemon={fullPokemon} />
        </ScrollView>
      )}

      {/* TODO: Fix colors contrast on android cards */}
    </View>
  );
};
