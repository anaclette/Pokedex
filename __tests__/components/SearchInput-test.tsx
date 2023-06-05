import React from 'react';
// import {renderHook} from '@testing-library/react-hooks';
import {render, fireEvent} from '@testing-library/react-native';
import SearchInput from '../../src/components/SearchInput';
import {Provider} from 'react-redux';
import {store} from '../../src/state/store';

const onDebounceMock = jest.fn();

describe('SearchInput test', () => {
  const component = (
    <Provider store={store}>
      <SearchInput onDebounce={onDebounceMock} />
    </Provider>
  );

  it('renders correctly, changes input value and state', () => {
    const {getByTestId} = render(component);

    const searchButton = getByTestId('search-input-button');
    const textInput = getByTestId('search-input');

    fireEvent.changeText(textInput, 'Jackie');
    fireEvent.press(searchButton);
    expect(textInput.props.value).toBe('Jackie');
  });
});
