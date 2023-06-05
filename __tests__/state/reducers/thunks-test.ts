import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {pokemonBasicDetails} from '../../../__mocks__/pokemonMocks';
import {baseUrl, STATE_MODULES} from '../../../src/common/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const pokemonsEndpointMock = `${baseUrl}/${STATE_MODULES.POKEMONS}?limit=50&offset=50`;

describe('async actions', () => {
  it('should dispatch action of getPokemons', () => {
    const initialState = {
      results: [],
      loading: false,
      error: false,
    };
    const expectedActions = [
      {
        type: 'pokemon/GET_POKEMONS',
        payload: pokemonBasicDetails,
        error: false,
        loading: false,
      },
      {
        type: pokemonsEndpointMock,
        payload: pokemonBasicDetails,
        error: false,
        loading: false,
      },
    ];

    const store = mockStore({initialState});
    store.dispatch(expectedActions[0]);
    store.dispatch(expectedActions[1]);

    expect(store.getActions()).toEqual(expectedActions);
  });
});
