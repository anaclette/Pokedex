import authReducer, {
  toggleIsFavourite,
  cleanUpFavourites,
} from '../../../src/state/reducers/favouritesReducer';
import {store} from '../../../src/state/store';
import {mockNewListPokemon} from '../../../__mocks__/pokemonMocks';
import {Favourites} from '../../../__mocks__/favouritesMock';

describe('Testing favourites reducer', () => {
  it('should show stored favourites', async () => {
    await store.dispatch(toggleIsFavourite(mockNewListPokemon));
  });
});
describe('Testing having removed all favourites', () => {
  it('should be none favourites stored', () => {
    const initialState = {
      data: [],
      favouritePokemon: '',
    };
    expect(authReducer(Favourites, {type: cleanUpFavourites})).toEqual(
      initialState,
    );
  });
});
