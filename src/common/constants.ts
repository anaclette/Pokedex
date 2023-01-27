import {Platform, Dimensions} from 'react-native';

export const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
export const pictureBaseUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
export const isIos = Platform.OS === 'ios';
export const {height, width} = Dimensions.get('window');
