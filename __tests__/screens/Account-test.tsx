import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Account from '../../src/screens/Account';
import {Provider} from 'react-redux';
import {store} from '../../src/state/store';

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
    const {getByPlaceholderText} = render(component);
    fireEvent.changeText(getByPlaceholderText('username'), 'Cookie');

    // test failed: 'Unable to find an element with placeholder: username'
    expect(getByPlaceholderText('username')).toBe('Cookie');
  });

  describe('clicking Sign In', () => {
    // test failed: 'Unable to find an element with testID: login-and-out-button'
    it('calls dispatch(username ? logout() : logIn(userInput))', () => {
      const {getByTestId} = render(component);
      const loginAndOutHandler = jest.fn();
      const loginAndOutButton = getByTestId('login-and-out-button');
      fireEvent.press(loginAndOutButton);

      expect(loginAndOutHandler).toHaveBeenCalled();
    });
  });
});
