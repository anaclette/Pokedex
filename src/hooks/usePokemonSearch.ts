import {useEffect, useState} from 'react';
import {api} from '../api/pokemon';
import {baseUrl, pictureBaseUrl} from '../common/constants';
import {Pokemon, PokemonDetails, NewListPokemon} from '../types/Pokemon';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [pokemonList, setPokemonList] = useState<NewListPokemon[]>([]);
  const apiUrl = `${baseUrl}?limit=1200`;

  const loadPokemons = async () => {
    setIsFetching(true);
    const result = await api.get<Pokemon>(apiUrl);
    mapPokeList(result.data.results);
  };

  const mapPokeList = (list: PokemonDetails[]) => {
    const newPokemonList: NewListPokemon[] = list.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `${pictureBaseUrl}/${id}.png`;

      return {
        id,
        picture,
        name,
      };
    });

    setPokemonList(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {isFetching, pokemonList};
};
