import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Account from '../../src/screens/Account';
import {Provider} from 'react-redux';
import {store} from '../../src/state/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

describe('Account', () => {
  const component = (
    <Provider store={store}>
      <SafeAreaProvider>
        <Account />
      </SafeAreaProvider>
    </Provider>
  );

  it('renders', () => {
    render(component);
  });

  //   it('catches the user input', () => {
  //     fireEvent.changeText(screen.getByPlaceholderText('username'), 'Cookie');
  //     fireEvent.press(screen.getByText('Sign in'));

  //     expect(screen.getByPlaceholderText('username')).toHaveProperty(
  //       'value',
  //       'Cookie',
  //     );
  //   });

  //   describe('clicking Sign In', () => {
  //     it('calls dispatch(username ? logout() : logIn(userInput))', () => {
  //       render(component);
  //       const userInput = 'Cookie';
  //       const sendHandler = jest.fn();

  //       fireEvent.changeText(screen.getByPlaceholderText('username'), 'Cookie');
  //       fireEvent.press(screen.getByText('Sign in'));

  //       expect(sendHandler).toHaveBeenCalledWith(userInput);
  //     });
  //   });
});
