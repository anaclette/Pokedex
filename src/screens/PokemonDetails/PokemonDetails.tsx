import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './pokemonDetails.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFullPokemon} from '../../hooks/useFullPokemon';
import FadeInImage from '../../components/FadeInImage';
// import {PokemonFullDetails} from '../../types/Pokemon';

interface Props extends DrawerScreenProps<RootStackParams, 'PokemonDetails'> {}

const {height, width} = Dimensions.get('window');

const isValid = (item: string | null | undefined) => {
  return item !== null && item !== undefined;
};

const convertLbToKg = (lbs: number) => {
  const kg = lbs * 0.453592;
  const pokemonWeight = Math.floor(kg);
  return pokemonWeight;
};

export const PokemonDetails = ({route, navigation}: Props) => {
  const {pokemonDetails, imgColor, textColor} = route.params;
  const {top} = useSafeAreaInsets();
  const isIos = Platform.OS === 'ios';
  const [fullMoves, setFullMoves] = useState(false);

  const {isLoading, fullPokemon} = useFullPokemon(pokemonDetails.id);

  // console.log('full pokemon details: ', fullPokemon.name); // TODO: check why this executing thrice, 1st undefined and then twice

  const onFullMovesBtnPress = () => {
    setFullMoves(!fullMoves);
  };

  const getMoves = (movesGroup: any[]) => {
    const shownMoves: any[] = [];
    const maxShown = 10;

    movesGroup?.map(moveGroup => {
      const moves = Object.values(moveGroup.move);
      shownMoves.push(moves[0]);
    });

    return (
      <View style={{alignItems: 'center'}}>
        <Text>{`Movimientos (${shownMoves.length})`}</Text>
        {fullMoves ? (
          <ScrollView
            style={{
              backgroundColor: textColor,
              top: top - 250,
              ...styles.fullMovesWrapper,
            }}>
            <Text
              style={{
                color: imgColor,
                ...styles.fullMovesItem,
              }}>
              {shownMoves.join(' ⊛ ')}
            </Text>
          </ScrollView>
        ) : (
          <View style={{backgroundColor: imgColor, ...styles.moveItemsWrapper}}>
            {shownMoves.slice(0, maxShown).map((move, index) => (
              <Text
                key={index}
                style={{
                  color: textColor,
                  ...styles.moveItem,
                }}>
                {`${index !== 0 && '⊛ '} ${move}`}
              </Text>
            ))}
            {shownMoves.length > maxShown && (
              <Text
                style={{
                  color: textColor,
                  ...styles.moveItem,
                }}>
                ...
              </Text>
            )}
          </View>
        )}
        {shownMoves.length > maxShown && (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="See full moves"
            onPress={onFullMovesBtnPress}
            style={fullMoves && styles.showFullMovesBtn}>
            <Text
              style={[
                styles.buttonText,
                fullMoves
                  ? {...styles.seeLessContentText, color: imgColor}
                  : styles.seeFullContentText,
              ]}>
              {fullMoves ? 'Ver menos' : 'Ver todos los movimientos'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const retrieveSprites = (sprites: Object) => {
    const pokemonImages = Object.values(sprites);
    return pokemonImages
      .slice(0, 8)
      .map(
        (image, index) =>
          isValid(image) && (
            <FadeInImage
              key={index}
              uri={image}
              containerStyle={{
                width: width * 0.2,
                height: height * 0.1,
              }}
              imgStyle={styles.spriteImg}
            />
          ),
      )
      .reverse();
  };

  return (
    <ScrollView style={{backgroundColor: imgColor}}>
      <View
        style={
          !fullMoves ? styles.whiteContainer : {backgroundColor: textColor}
        }>
        <View
          style={{
            backgroundColor: imgColor,
            height: height * 0.4,
            paddingTop: isIos ? top : top + 20,
            ...styles.pokemonImageContainer,
          }}>
          <View style={styles.nameWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                size={isIos ? 25 : 35}
                name="arrow-left"
                color={textColor}
                style={{left: width * 0.02}}
              />
            </TouchableOpacity>
            <Text style={{...styles.name, color: textColor}}>
              {pokemonDetails.name}
            </Text>
          </View>
          <Image
            source={require('../../assets/pokebola.png')}
            style={{
              width: width / 1.8,
              height: height / 4,

              ...styles.pokeballImg,
            }}
          />
          <Image
            source={{uri: pokemonDetails.picture}}
            style={{
              width: width * 0.6,
              height: height / 3.4,
              top: isIos ? top * 2.6 : top + 125,
              ...styles.pokemonImg,
            }}
          />
        </View>
        <Text>{fullPokemon.types?.length > 1 ? 'Tipos' : 'Tipo'}</Text>
        {fullPokemon.types?.map((type, index) => (
          <Text key={index}>{type.type.name}</Text>
        ))}

        <Text>Peso: {convertLbToKg(fullPokemon.weight)} kg</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {fullPokemon.sprites && retrieveSprites(fullPokemon.sprites)}
        </ScrollView>

        {fullPokemon.moves && getMoves(fullPokemon.moves)}
      </View>
      {/* <View style={styles.loaderWrapper}>
        <ActivityIndicator color={textColor} size={50} />
      </View> */}

      {/* TODO: stats */}
    </ScrollView>
  );
};
