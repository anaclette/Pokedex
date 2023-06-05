import React from 'react';
import {render} from '@testing-library/react-native';
import FadeInImage from '../../src/components/FadeInImage';
import renderer from 'react-test-renderer';

describe('Testing FadeInImage component', () => {
  it('Should render FadeInImage correctly', () => {
    const component = <FadeInImage uri={'uri source'} />;
    const {getByTestId} = render(component);

    expect(renderer.create(component).toJSON()).toMatchSnapshot();
    expect(getByTestId('image')).toBeTruthy();
    expect(getByTestId('activity-indicator')).toBeTruthy();

    // const handleLoading = jest.spyOn(React, 'useState');
    // const setIsLoading = jest.fn();
    // handleLoading.mockImplementation(loading => [loading, setIsLoading]);
    // expect(setIsLoading).toBeCalled();
  });
});
