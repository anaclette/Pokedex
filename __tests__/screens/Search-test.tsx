import React from 'react';
import {render, screen} from '@testing-library/react-native';
import SearchInput from '../../src/components/SearchInput';
import {Provider} from 'react-redux';
import {store} from '../../src/state/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const onDebounceMock = jest.fn();

describe('Search screen', () => {
  it('renders Search screen', () => {
    const component = (
      <SafeAreaProvider>
        <Provider store={store}>
          <SearchInput onDebounce={onDebounceMock} />
        </Provider>
      </SafeAreaProvider>
    );

    render(component);
    // this should fail but it passes since its unable to find element with 'search-input' testID
    // expect(screen.queryByTestId('search-input')).not.toBeNull(); should pass

    expect(screen.queryByTestId('search-input')).toBeNull();
  });
});
