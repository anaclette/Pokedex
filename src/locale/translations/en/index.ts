import {TranslationResource} from '../keys';

const translation: TranslationResource = {
  ABILITIES: 'Abilities',
  MOVES: 'Moves',
  WEIGHT: 'Weight',
  HEIGHT: 'Height',
  SEE_LESS: 'See less',
  SEE_ALL: 'See all',
  BASE_STATS: 'Base stats',
  USERNAME_INPUT_LABEL: 'username input',
  USERNAME_PLACEHOLDER: 'username',
  ACCESSIBILITY_HINT_USERNAME_REQS:
    'Validates if username is not empty and is longer than 5 characters.',
  USERNAME_MIN_LENGTH: 'Username must be at least five characters long.',
  USERNAME_ALPHANUMERIC_ONLY: 'Alphanumeric characters only.',
  USERNAME_REQUIRED: 'Username is required',
  SIGN_IN: 'Sign in',
  USERNAME_MATCH_STORED: 'Verifies if current user matches logged in.',
  LOG_OUT: 'Log out',
  NOT_USERNAME: 'Not {{username}}?',
  GREET_USERNAME: 'Hello {{username}}',
  SIGN_IN_DIFF_ACCOUNT: 'Sign with a different user',
  MY_FAVOURITES: 'My favourites',
  NO_FAVOURITES_SUBTITLE: 'Still no favourites. Find some through the ',
  NO_FAVOURITES_LINK: 'Pokedex',
  ACCESSIBILITY_LABEL_FAVOURITES_ICON: 'Add to favourites heart icon',
  SEARCH_PLACEHOLDER: 'Search',
  ACCESSIBILITY_SEARCH_LABEL: 'Search button',
  TAB_SEARCH: 'Search',
  TAB_ACCOUNT: 'User',
  ADD_FAVOURITE_LOGIN_WARNING:
    'You need to login to add {{PokemonName}} to your favourites',
  STILL_LOADING_WARNING: 'Not done loading yet...\nAny second now!',
  GO_BACK_BUTTON_LABEL: 'Go back button',
  NAVIGATE_TO_POKEDEX_BUTTON_LABEL: 'Go to Pokedex',
  REMOVE_ALL_FAVOURITES: 'Delete all favourites',
  DELETE_ALL_ALERT_TITLE: 'Delete',
  DELETE_ALL_ALERT_MESSAGE: 'You are about to delete all of your favourites',
  DELETE_ALL_OPTION_ONE: 'Cancel',
  DELETE_ALL_OPTION_TWO: 'Delete',
};

export default translation;
