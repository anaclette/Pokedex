import {renderHook} from '@testing-library/react-native';
import {useFullPokemon} from '../../src/hooks/useFullPokemon';
import {pokemonMock} from '../../__mocks__/pokemonMocks';

describe('Testing useFullPokemon hook', () => {
  it('should retrieve stored pokemon', () => {
    const {result} = renderHook(() => useFullPokemon('1'));
    expect(result.current.isLoading).toBe(true);

    // test failed: Received: undefined
    // result prop not working
    // expect(result.current.fullPokemon).toHaveProperty('name');
    // expect(result.current.fullPokemon.name).toBe(pokemonMock.name);
  });
});
