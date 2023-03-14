import {
  Species,
  Ability,
  Move,
  Sprites,
  Stat,
  Type,
  PokemonFullDetails,
  NewListPokemon,
} from '../src/types/Pokemon';

const speciesMock: Species = {
  name: 'Pikachu',
  url: 'url',
};

const abilitiesMock: Ability = {
  ability: speciesMock,
  is_hidden: false,
  slot: 1,
};

const movesMock: Move = {
  move: speciesMock,
};

const spritesMock: Sprites = {
  back_default: 'back-default-url',
  back_female: null,
  back_shiny: 'back-shiny-url',
  back_shiny_female: null,
  front_default: 'front-default-url',
  front_female: null,
  front_shiny: 'front-shiny-url',
  front_shiny_female: null,
};

const statsMock: Stat = {
  base_stat: 20,
  effort: 30,
  stat: speciesMock,
};

const typesMock: Type = {
  slot: 1,
  type: speciesMock,
};

const pokemonMock: PokemonFullDetails = {
  abilities: [abilitiesMock],
  base_experience: 50,
  forms: [speciesMock],
  height: 50,
  held_items: [],
  id: '3',
  is_default: false,
  location_area_encounters: 'location-area-encounters',
  moves: [movesMock],
  name: 'Pikachu',
  order: 10,
  past_types: [],
  species: speciesMock,
  sprites: spritesMock,
  stats: [statsMock],
  types: [typesMock],
  weight: 100,
};

const mockNewListPokemon: NewListPokemon = {
  id: '20',
  name: 'Metapod',
  picture: 'url',
  imgColor: 'peru',
  textColor: 'lime',
};

export {pokemonMock, abilitiesMock, speciesMock, mockNewListPokemon};
