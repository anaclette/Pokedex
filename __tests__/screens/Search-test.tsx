import React from 'react';
import {render, screen} from '@testing-library/react-native';
import SearchInput from '../../src/components/SearchInput';
import {Provider} from 'react-redux';
import {store} from '../../src/state/store';

const onDebounceMock = jest.fn();

describe('Search screen', () => {
  it('renders Search screen', () => {
    const component = (
      <Provider store={store}>
        <SearchInput onDebounce={onDebounceMock} />
      </Provider>
    );

    render(component);

    expect(screen.queryByTestId('search-input')).not.toBeNull();
  });
});
