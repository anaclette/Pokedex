import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {STATE_MODULES} from '../../common/constants';

type Auth = {username?: string | null | undefined};

const initialState: Auth = {
  username: null,
};

const authReducer = createSlice({
  name: STATE_MODULES.AUTH,
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => ({
      ...state,
      username: action.payload,
    }),
    logOut: () => initialState,
  },
});

export const {logIn, logOut} = authReducer.actions;

export default authReducer.reducer;
