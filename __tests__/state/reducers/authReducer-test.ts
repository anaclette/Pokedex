import authReducer, {
  logIn,
  logOut,
} from '../../../src/state/reducers/authReducer';
import {store} from '../../../src/state/store';
import {User} from '../../../__mocks__/userMock';

const mockPayloadValue = 'Ana13';

describe('Testing the sign in authentication', () => {
  it('user attempts to login', async () => {
    await store.dispatch(logIn(mockPayloadValue));
    expect(store.getState().auth.username).toBe(mockPayloadValue);
  });
});
describe('Testing reducer after user logs out', () => {
  it('user is back to initial state', () => {
    expect(authReducer(User, {type: logOut})).toMatchSnapshot();
  });
});
