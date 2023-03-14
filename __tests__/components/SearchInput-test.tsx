import * as React from 'react';
import {render} from '@testing-library/react-native';
import SearchInput from '../../src/components/SearchInput';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from '../../src/state/store';

const onDebounceMock = jest.fn();

describe('SearchInput test', () => {
  const component = (
    <SafeAreaProvider>
      <Provider store={store}>
        <SearchInput onDebounce={onDebounceMock} />
      </Provider>
    </SafeAreaProvider>
  );
  it('renders', () => {
    render(component);

    expect(component).toMatchSnapshot();
  });
});
