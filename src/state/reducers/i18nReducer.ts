import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import en from '../../locale/translations/en';
import es from '../../locale/translations/es';
import {Constants, supportedLangs} from '../../locale/config';

const initialState = {
  lang: Constants.defaultLanguage,
  supportedLangs: {...supportedLangs},
  translations: {
    en: en,
    es: es,
  },
};

export const i18nReducer = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<string>) => ({
      ...state,
      lang: action.payload,
    }),
  },
});

export const {switchLanguage} = i18nReducer.actions;

export default i18nReducer;
