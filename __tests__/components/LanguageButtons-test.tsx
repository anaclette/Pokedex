import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import LanguageButtons from '../../src/components/LanguageButtons';
import {store} from '../../src/state/store';

test('language buttons render correctly', () => {
  const component = (
    <Provider store={store}>
      <LanguageButtons />
    </Provider>
  );

  const {getAllByRole} = render(component);
  expect(component).toMatchSnapshot();

  const button = getAllByRole('button');
  expect(button).toBeTruthy();
});
