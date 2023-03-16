import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Account from '../../src/screens/Account';
import {Provider} from 'react-redux';
import {store} from '../../src/state/store';
import {TranslationKeys} from '../../src/locale/translations/keys';

describe('Account', () => {
  const component = (
    <Provider store={store}>
      <Account />
    </Provider>
  );

  it('renders', () => {
    render(component);
  });

  it('catches the user input', () => {
    const {getAllByRole, getByPlaceholderText} = render(component);
    const input = getByPlaceholderText(TranslationKeys.USERNAME_PLACEHOLDER);

    expect(input.props.value).toBe('');

    fireEvent.changeText(input, 'Cookie');

    expect(input.props.value).toBe('Cookie');
    expect(getAllByRole('button')).toBeDefined();
  });

  describe('clicking Sign In', () => {
    it('calls dispatch(username ? logout() : logIn(userInput))', () => {
      const {getByTestId} = render(component);
      const loginAndOutButton = getByTestId('login-and-out-button');
      fireEvent.press(loginAndOutButton);
    });
  });
});
