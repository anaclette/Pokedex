import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPokemons} from '../thunks';
import {STATE_MODULES} from '../../common/constants';
import {Pokemon, PokemonDetails} from '../../types/Pokemon';

const initialState = {
  results: [],
  next: '',
  loading: false,
  error: false,
} as Pokemon;

const {pending, fulfilled, rejected} = getPokemons;

const pokemonsReducer = createSlice({
  name: STATE_MODULES.POKEMONS,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(pending, state => {
        state.loading = true;
      })
      .addCase(rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(fulfilled, (state, action: PayloadAction<PokemonDetails[]>) => {
        state.loading = false;
        state.results = action.payload;
      });
  },
});

export default pokemonsReducer.reducer;
