import {useAppSelector} from '../state/hooks';
import {PokemonFullDetails} from '../types/Pokemon';

export const useFavourites = () =>
  useAppSelector(state => state.favourites.data);

export const useIsFavourite = (id: PokemonFullDetails['id']) =>
  useAppSelector(state =>
    state.favourites.data?.some(pokemon => pokemon.id === id),
  );
