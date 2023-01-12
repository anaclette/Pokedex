import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootStackParams} from '../../navigation/StackNavigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './pokemonDetails.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends DrawerScreenProps<RootStackParams, 'PokemonDetails'> {}

const {height, width} = Dimensions.get('window');

export const PokemonDetails = ({route, navigation}: Props) => {
  const {pokemonDetails, imgColor, textColor} = route.params;
  const {top} = useSafeAreaInsets();
  const isIOS = Platform.OS === 'ios';

  return (
    //   <View
    //   style={[{paddingTop: top, backgroundColor: imgColor}, styles.container]}>
    //   <TouchableOpacity onPress={() => navigation.goBack()}>
    //     <Icon
    //       size={25}
    //       name="arrow-left"
    //       color={textColor}
    //       style={{left: width * 0.02}}
    //     />
    //   </TouchableOpacity>
    //   <Text style={[styles.name, {color: textColor}]}>
    //     {pokemonDetails.name}
    //   </Text>
    //   <View style={styles.container}>
    //     <View style={styles.imagesWrapper}>
    //       <Image
    //         source={require('../../assets/pokebola.png')}
    //         style={[
    //           {
    //             width: width * 0.7,
    //             height: height * 0.3,
    //           },
    //           styles.pokeballImg,
    //         ]}
    //       />
    //       <Image
    //         source={{uri: pokemonDetails.picture}}
    //         style={[
    //           {
    //             width: width * 0.8,
    //             height: height / 3,
    //             top: top * 0.9,
    //             // bottom: 0,
    //           },
    //           styles.pokemonImg,
    //         ]}
    //       />
    //     </View>
    //   </View>
    // </View>
    <View
      style={[
        {
          backgroundColor: imgColor,
          height: height * 0.4,
          paddingTop: isIOS ? top : top + 20,
        },
        styles.container,
      ]}>
      <View style={styles.nameWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            size={isIOS ? 25 : 35}
            name="arrow-left"
            color={textColor}
            style={{left: width * 0.02}}
          />
        </TouchableOpacity>
        <Text style={[styles.name, {color: textColor}]}>
          {pokemonDetails.name}
        </Text>
      </View>
      <Image
        source={require('../../assets/pokebola.png')}
        style={[
          {
            width: width / 1.8,
            height: height / 4,
          },
          styles.pokeballImg,
        ]}
      />
      <Image
        source={{uri: pokemonDetails.picture}}
        style={[
          {
            width: width * 0.6,
            height: height / 3.4,
            top: isIOS ? top * 2.6 : top + 190,
          },
          styles.pokemonImg,
        ]}
      />
    </View>
  );
};
