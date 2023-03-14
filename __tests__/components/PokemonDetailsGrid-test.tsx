import * as React from 'react';
import {render} from '@testing-library/react-native';
import PokemonDetailsGrid from '../../src/components/PokemonDetailsGrid';
import {pokemonMock} from '../../__mocks__/pokemonMocks';

describe('PokemonDetailsGrid renders correctly', () => {
  it('displays pokemon details', () => {
    const component = (
      <PokemonDetailsGrid
        pokemon={pokemonMock}
        lightColor={'gray'}
        darkColor={'brown'}
        titleSize={25}
        itemTextSize={15}
      />
    );
    render(component);
  });
});
