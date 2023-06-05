import * as React from 'react';
import Pokeball from '../../src/components/Pokeball';
import {render, screen} from '@testing-library/react-native';

describe('Pokeball image renders correctly', () => {
  it('displays the pokeball', () => {
    const component = render(
      <Pokeball style={{width: 20}} source={{uri: 'some source uri'}} />,
    );

    expect(screen.getByLabelText('Pokeball image')).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
