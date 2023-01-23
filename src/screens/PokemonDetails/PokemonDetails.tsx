import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
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

const convertDcToCm = (dc: number) => {
  const cm = dc * 10;
  const pokemonHeight = Math.floor(cm);
  return pokemonHeight;
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

    // const PokeIcon = () => {
    //   return (
    //     <Icon
    //       name="pokeball"
    //       color={shownMoves.length > maxShown ? textColor : imgColor}
    //     />
    //   );
    // };

    return (
      <View>
        <Text style={styles.title}>{`Movimientos (${shownMoves.length})`}</Text>
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
                {`${index !== 0 && ' ⊛ '} ${move}`}
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
          <TouchableHighlight
            accessibilityRole="button"
            accessibilityLabel="See full moves"
            onPress={onFullMovesBtnPress}
            underlayColor={fullMoves ? textColor : imgColor}
            style={
              fullMoves ? styles.showFullMovesBtn : {backgroundColor: imgColor}
            }>
            <Text
              style={[
                styles.buttonText,
                fullMoves
                  ? {...styles.seeLessContentText, color: imgColor}
                  : styles.seeFullContentText,
              ]}>
              {fullMoves ? 'Ver menos' : 'Ver todos los movimientos'}
            </Text>
          </TouchableHighlight>
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
          <View style={styles.rowContainer}>
            <TouchableHighlight
              accessibilityRole="imagebutton"
              accessibilityLabel="Go back icon"
              onPress={() => navigation.goBack()}>
              <Icon
                size={isIos ? 25 : 35}
                name="arrow-left"
                color={textColor}
                style={{left: width * 0.02}}
              />
            </TouchableHighlight>
            <Text style={{...styles.name, color: textColor}}>
              {pokemonDetails.name}
            </Text>
          </View>
          <Image
            source={require('../../assets/images/pokebola.png')}
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
          <>
            <Text style={styles.title}>
              {fullPokemon.types?.length > 1 ? 'Tipos:' : 'Tipo:'}
            </Text>
            {fullPokemon.types?.map((type, index) => (
              <Text style={styles.listItem} key={index}>
                {type.type.name}
              </Text>
            ))}

            <Text style={styles.title}>Peso:</Text>
            <Text style={styles.listItem}>
              {convertLbToKg(fullPokemon.weight)} kg
            </Text>
            <Text style={styles.title}>Altura:</Text>
            <Text style={styles.listItem}>
              {convertDcToCm(fullPokemon.height)} cm
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {fullPokemon.sprites && retrieveSprites(fullPokemon.sprites)}
            </ScrollView>

            {fullPokemon.moves && getMoves(fullPokemon.moves)}

            <Text style={styles.title}>Stats</Text>
            <View>
              {fullPokemon.stats.map((stat, index) => (
                <View
                  key={stat.stat.name + index.toString()}
                  style={styles.rowContainer}>
                  <Text
                    style={{
                      ...styles.listItem,
                      ...styles.statName,
                    }}
                    key={stat.stat.name}>
                    {stat.stat.name}
                  </Text>

                  <Text style={styles.listItem}>{stat.base_stat}</Text>
                </View>
              ))}

              <View
                style={{...styles.rowContainer, ...styles.abilitiesContainer}}>
                {fullPokemon.abilities.map(ability => (
                  <>
                    <Text>{ability.ability.name}</Text>
                    <Text>{ability.is_hidden}</Text>
                    <Text>{ability.slot}</Text>
                  </>
                ))}
              </View>
            </View>
          </>
        )}
      </View>

      {/* TODO: Componentizar */}
    </ScrollView>
  );
};
