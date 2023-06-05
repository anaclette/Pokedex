import {
  convertDcToCm,
  convertLbToKg,
  isValid,
  getMoves,
  newShade,
  validateUserInput,
  // checkIfEmpty,
  capitalizeFirstLetter,
} from '../../src/utils/helpers';

const mockedMoves = [
  {
    move: {name: 'mega-punch', url: 'url'},
  },
];

it('given input `Cookie`, isValid should be truthy', () => {
  expect(isValid('Cookie')).toBe(true);
});

it('given 100 libs, convertLbToKg should return 45', () => {
  expect(convertLbToKg(100)).toBe(45);
});

it('should return 1000', () => {
  expect(convertDcToCm(100)).toBe(1000);
});

it('given an array of objects, getMoves should return each one`s value', () => {
  expect(getMoves(mockedMoves)).toStrictEqual(['mega-punch']);
});

it('given "E27F6E", 50, newShade should return #ffb1a0. And if given color is longer than 6 charts, should return given color', () => {
  expect(newShade('E27F6E', 50)).toBe('#ffb1a0');
  expect(newShade('E27F6EE', 50)).toBe('E27F6EE');
});

it('given `Cookie` input value, validateUserInput should be falsy', () => {
  expect(validateUserInput('Cookie')).toBe(false);
});

it('given `charmander`, capitalizeFirstLetter should return `Charmander`', () => {
  expect(capitalizeFirstLetter('charmander')).toBe('Charmander');
});
