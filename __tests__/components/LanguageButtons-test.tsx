import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import LanguageButtons from '../../src/components/LanguageButtons';
import {store} from '../../src/state/store';

const component = (
  <Provider store={store}>
    <LanguageButtons />
  </Provider>
);

test('language buttons render correctly', () => {
  const {getAllByRole, getAllByLabelText} = render(component);
  expect(component).toMatchSnapshot();

  const button = getAllByRole('button');
  expect(button).toBeTruthy();

  const label = getAllByLabelText('EEUU flag image to choose english language');
  expect(label).toBeTruthy();
});
