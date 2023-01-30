import {Platform, Dimensions} from 'react-native';

export const baseUrl = 'https://pokeapi.co/api/v2';
export const pictureBaseUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
export const isIos = Platform.OS === 'ios';
export const {height, width} = Dimensions.get('window');

export enum STATE_MODULES {
  AUTH = 'auth',
  POKEMONS = 'pokemon',
  FAVOURITES = 'favourites',
}

export enum ACTIONS {
  GET_POKEMONS = 'GET_POKEMONS',
  GET_FAVOURITES = 'GET_FAVOURITES',
}
