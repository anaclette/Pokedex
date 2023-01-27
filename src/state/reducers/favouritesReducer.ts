import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {STATE_MODULES} from '../../common/constants';
import {NewListPokemon} from '../../types/Pokemon';

type FavouritesSlice = {
  data: NewListPokemon[];
  imageUrl: string;
};

const initialState: FavouritesSlice = {
  data: [],
  imageUrl: '',
};

export const favouritesSlice = createSlice({
  name: STATE_MODULES.FAVOURITES,
  initialState,
  reducers: {
    toggleIsFavourite: (state, action: PayloadAction<NewListPokemon>) => {
      const isFavourite = state.data.some(
        pokemon => pokemon.id === action.payload.id,
      );
      if (isFavourite) {
        return {
          ...state,
          data: state.data.filter(pokemon => pokemon.id !== action.payload.id),
        };
      }
      return {...state, data: state.data.concat([action.payload])};
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      return {...state, imageUrl: action.payload};
    },
  },
});

export const {toggleIsFavourite, setImageUrl} = favouritesSlice.actions;

export default favouritesSlice.reducer;
