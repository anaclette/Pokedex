import React, {ReactNode} from 'react';
import {renderHook} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../src/state/store';
import {useFullPokemon} from '../../src/hooks/useFullPokemon';
import {pokemonMock} from '../../__mocks__/pokemonMocks';

describe('Testing useFullPokemon hook', () => {
  it('should retrieve stored pokemon', () => {
    const Wrapper = ({children}: {children: ReactNode}) => {
      return <Provider store={store}>{children}</Provider>;
    };

    const {result, rerender} = renderHook(() => useFullPokemon('1'), {
      wrapper: Wrapper,
    });
    // test failed: Received: undefined
    // result prop not working
    expect(result.current.fullPokemon.name).toBe(pokemonMock.name);
    rerender(3);
  });
});
