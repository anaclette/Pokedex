import {renderHook} from '@testing-library/react-hooks';
import {usePokemon} from '../../src/hooks/usePokemon';
import {pokemonMock} from '../../__mocks__/pokemonMocks';

test('usePokemon performs GET request', async () => {
  const {result, waitForNextUpdate} = renderHook(() => usePokemon());
  expect(result.current.pokeList).toEqual([]);
  expect(result.current.isLoading).toBeTruthy();
  expect(result.current.loadPokemons).toBeDefined();

  await waitForNextUpdate();

  expect(result.current.isLoading).toBeFalsy();
  expect(result.current.loadPokemons).not.toBeNull();
  expect(result.current.pokeList).toHaveLength(20);
  expect(result.current.pokeList[0].id).toEqual(pokemonMock.id);
});
