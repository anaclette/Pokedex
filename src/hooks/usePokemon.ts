import {useEffect, useRef, useState} from 'react';
import {api} from '../api/pokemon';
import {baseUrl, pictureBaseUrl} from '../common/constants';
import {Pokemon, PokemonDetails, NewListPokemon} from '../types/Pokemon';

export const usePokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = `${baseUrl}/pokemon?limit=20`;
  const [pokeList, setPokeList] = useState<NewListPokemon[]>([]);
  const nextPage = useRef(apiUrl);

  const loadPokemons = async () => {
    setIsLoading(true);
    const result = await api.get<Pokemon>(nextPage.current);
    nextPage.current = result.data.next;
    mapPokeList(result.data.results);
  };

  const mapPokeList = (list: PokemonDetails[]) => {
    const newList: NewListPokemon[] = list.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `${pictureBaseUrl}/${id}.png`;

      return {
        id,
        picture,
        name,
      };
    });

    setPokeList([...pokeList, ...newList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {isLoading, pokeList, loadPokemons};
};
