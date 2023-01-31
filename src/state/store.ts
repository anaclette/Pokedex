import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import authReducer from './reducers/authReducer';
import pokemonsReducer from './reducers/pokemonsReducer';
import favouritesReducer from './reducers/favouritesReducer';
import {STATE_MODULES} from '../common/constants';
import {i18nReducer} from './reducers/i18nReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [STATE_MODULES.AUTH]: authReducer,
  [STATE_MODULES.POKEMONS]: pokemonsReducer,
  [STATE_MODULES.FAVOURITES]: favouritesReducer,
  [STATE_MODULES.LANGUAGES]: i18nReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {persistor, store};
