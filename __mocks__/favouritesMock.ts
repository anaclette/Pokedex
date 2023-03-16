import {FavouritesSlice} from '../src/state/reducers/favouritesReducer';
import {mockNewListPokemon} from './pokemonMocks';

const Favourites: FavouritesSlice = {
  data: [mockNewListPokemon],
  favouritePokemon: 'Pikachu',
};

export {Favourites};
