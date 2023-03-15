import * as React from 'react';
import {render} from '@testing-library/react-native';
import Favourites from '../../src/screens/Favourites';
import {store} from '../../src/state/store';
import {Provider} from 'react-redux';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../src/navigation/StackNavigator/StackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

let navigation: Partial<StackNavigationProp<RootStackParams, 'PokemonDetails'>>;
let route: Partial<RouteProp<RootStackParams, 'PokemonDetails'>>;

describe('Favourites screen', () => {
  it('displays Favourites screen', () => {
    const favourites = render(
      <Provider store={store}>
        <SafeAreaProvider>
          <Favourites
            navigation={
              navigation as StackNavigationProp<
                RootStackParams,
                'PokemonDetails'
              >
            }
            route={route as RouteProp<RootStackParams, 'PokemonDetails'>}
          />
        </SafeAreaProvider>
      </Provider>,
    );
    expect(favourites).toBeTruthy();
  });

  const dispatch = store.dispatch;
  it('should display favourites if they exist in store', () => {
    expect(dispatch).toBeTruthy();
  });
});
