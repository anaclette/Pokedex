import React from 'react';
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

export const isValid = (item: string | null | undefined) => {
  return item !== null && item !== undefined;
};

export const PokemonDetails = ({route, navigation}: Props) => {
  const {pokemonDetails, imgColor, textColor} = route.params;
  const {top} = useSafeAreaInsets();
  const isIos = Platform.OS === 'ios';

  const {isLoading, fullPokemon} = useFullPokemon(pokemonDetails.id);

  // console.log('full pokemon details: ', fullPokemon.name); // TODO: check why this executing thrice, 1st undefined and then twice

  const retrieveSprites = (sprites: Object) => {
    const pokemonImages = Object.values(sprites);
    return pokemonImages.slice(0, 8).map(
      image =>
        isValid(image) && (
          <FadeInImage
            uri={image}
            containerStyle={{
              width: width * 0.2,
              height: height * 0.1,
            }}
            imgStyle={styles.spriteImg}
          />
        ),
    );
  };

  return (
    <>
      <View
        style={{
          backgroundColor: imgColor,
          height: height * 0.4,
          paddingTop: isIos ? top : top + 20,
          ...styles.container,
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
      {/* <View style={styles.loaderWrapper}>
        <ActivityIndicator color={textColor} size={50} />
      </View> */}
      <>
        <Text>Types</Text>
        {fullPokemon.types?.map((type, index) => (
          <Text key={index}>{type.type.name}</Text>
        ))}
        <Text>Sprites</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {fullPokemon.sprites && retrieveSprites(fullPokemon.sprites)}
        </ScrollView>

        {/* TODO: habilidades, peso, movimientos, stats */}
      </>
    </>
  );
};
