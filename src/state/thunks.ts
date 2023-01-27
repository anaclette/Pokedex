import {createAsyncThunk} from '@reduxjs/toolkit';
import {ACTIONS, baseUrl, STATE_MODULES} from '../common/constants';

export const getPokemons = createAsyncThunk(
  `${STATE_MODULES.POKEMONS}/${ACTIONS.GET_POKEMONS}`,
  async (_, {rejectWithValue}) => {
    try {
      const pokemons = await fetch(
        `${baseUrl}/${STATE_MODULES.POKEMONS}?limit=50&offset=50`,
      )
        .then(response => response.json())
        .then(data => data);
      return pokemons;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
