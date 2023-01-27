import {useEffect, useState} from 'react';
import {api} from '../api/pokemon';
import {baseUrl} from '../common/constants';
import {PokemonFullDetails} from '../types/Pokemon';

export const useFullPokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fullPokemon, setFullPokemon] = useState<PokemonFullDetails>(
    {} as PokemonFullDetails,
  );

  const loadFullPokemon = async () => {
    const result = await api.get<PokemonFullDetails>(
      `${baseUrl}/pokemon/${id}`,
    );

    setFullPokemon(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadFullPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {isLoading, fullPokemon};
};
