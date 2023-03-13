import * as React from 'react';
import {screen, render} from '@testing-library/react-native';
import PokemonPoster from '../../src/components/PokemonPoster';

describe('PokemonPoster image renders correctly', () => {
  it('displays the poster', () => {
    render(<PokemonPoster viewTop={100} imgHeight={100} />);
    expect(screen.getByLabelText('Pokedex header image')).toBeDefined();
  });
});
