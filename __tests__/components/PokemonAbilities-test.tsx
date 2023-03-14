import React from 'react';
import {render} from '@testing-library/react-native';
import PokemonAbilities from '../../src/components/PokemonAbilities';
import {pokemonMock, abilitiesMock} from '../../__mocks__/pokemonMocks';

describe('Testing PokemonAbilities', () => {
  it('renders correctly and ability object contains ability prop', () => {
    const component = (
      <PokemonAbilities
        pokemon={pokemonMock}
        backgroundColor={'blue'}
        textColor={'white'}
      />
    );
    const {getByTestId} = render(component);
    const abilitiesTitle = getByTestId('abilities-title');
    expect(abilitiesTitle).toBeDefined();
    expect(abilitiesMock).toHaveProperty('ability', abilitiesMock.ability);
  });
});
