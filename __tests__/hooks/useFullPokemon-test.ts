import {renderHook} from '@testing-library/react-hooks';
import {useFullPokemon} from '../../src/hooks/useFullPokemon';
import {pokemonMock} from '../../__mocks__/pokemonMocks';

test('useFullPokemon performs GET request', async () => {
  const {result, waitForNextUpdate} = renderHook(() => useFullPokemon('1'));
  expect(result.current.fullPokemon).toEqual({});
  expect(result.current.isLoading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.isLoading).toBeFalsy();
  expect(result.current.fullPokemon).toHaveProperty('name');
  expect(result.current.fullPokemon.name).toEqual(pokemonMock.name);
});
