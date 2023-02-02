export enum TranslationKeys {
  ABILITIES = 'ABILITIES',
  MOVES = 'MOVES',
  WEIGHT = 'WEIGHT',
  HEIGHT = 'HEIGHT',
  SEE_LESS = 'SEE_LESS',
  SEE_ALL = 'SEE_ALL',
  BASE_STATS = 'BASE_STATS',
  USERNAME_INPUT_LABEL = 'USERNAME_INPUT_LABEL',
  USERNAME_PLACEHOLDER = 'USERNAME_PLACEHOLDER',
  ACCESSIBILITY_HINT_USERNAME_REQS = 'ACCESSIBILITY_HINT_USERNAME_REQS',
  USERNAME_MIN_LENGTH = 'USERNAME_MIN_LENGTH',
  USERNAME_ALPHANUMERIC_ONLY = 'USERNAME_ALPHANUMERIC_ONLY',
  USERNAME_REQUIRED = 'USERNAME_REQUIRED',
  SIGN_IN = 'SIGN_IN',
  USERNAME_MATCH_STORED = 'USERNAME_MATCH_STORED',
  LOG_OUT = 'LOG_OUT',
  NOT_USERNAME = 'NOT_USERNAME',
  GREET_USERNAME = 'GREET_USERNAME',
  SIGN_IN_DIFF_ACCOUNT = 'SIGN_IN_DIFF_ACCOUNT',
  MY_FAVOURITES = 'MY_FAVOURITES',
  NO_FAVOURITES_SUBTITLE = 'NO_FAVOURITES_SUBTITLE',
  NO_FAVOURITES_LINK = 'NO_FAVOURITES_LINK',
  ACCESSIBILITY_LABEL_FAVOURITES_ICON = 'ACCESSIBILITY_LABEL_FAVOURITES_ICON',
  SEARCH_PLACEHOLDER = 'SEARCH_PLACEHOLDER',
  ACCESSIBILITY_SEARCH_LABEL = 'ACCESSIBILITY_SEARCH_LABEL',
  TAB_SEARCH = 'TAB_SEARCH',
  TAB_ACCOUNT = 'TAB_ACCOUNT',
  ADD_FAVOURITE_LOGIN_WARNING = 'ADD_FAVOURITE_LOGIN_WARNING',
  STILL_LOADING_WARNING = 'STILL_LOADING_WARNING',
  GO_BACK_BUTTON_LABEL = 'GO_BACK_BUTTON_LABEL',
  NAVIGATE_TO_POKEDEX_BUTTON_LABEL = 'NAVIGATE_TO_POKEDEX_BUTTON_LABEL',
}

export type TranslationResource = {
  [key in TranslationKeys]: any;
};
