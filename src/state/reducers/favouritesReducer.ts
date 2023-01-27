import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {STATE_MODULES} from '../../common/constants';
import {PokemonFullDetails} from '../../types/Pokemon';

type FavouritesSlice = {
  data: PokemonFullDetails[];
  favouritePokemon: string;
};

const initialState: FavouritesSlice = {
  data: [],
  favouritePokemon: '',
};

export const favouritesSlice = createSlice({
  name: STATE_MODULES.FAVOURITES,
  initialState,
  reducers: {
    toggleIsFavourite: (state, action: PayloadAction<PokemonFullDetails>) => {
      const isFavourite = state.data?.some(
        pokemon => pokemon.id === action.payload.id,
      );
      if (isFavourite) {
        return {
          ...state,
          data: state.data?.filter(pokemon => pokemon.id !== action.payload.id),
        };
      }
      return {...state, data: state.data?.concat([action.payload])};
    },
    setFavouritePokemon: (state, action: PayloadAction<string>) => {
      return {...state, favouritePokemon: action.payload};
    },
  },
});

export const {toggleIsFavourite, setFavouritePokemon} = favouritesSlice.actions;

export default favouritesSlice.reducer;
