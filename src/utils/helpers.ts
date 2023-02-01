/* eslint-disable no-bitwise */
export const isValid = (item: string | null | undefined) => {
  return item !== null && item !== undefined;
};

export const convertLbToKg = (lbs: number) => {
  const kg = lbs * 0.453592;
  const pokemonWeight = Math.floor(kg);
  return pokemonWeight;
};

export const convertDcToCm = (dc: number) => {
  const cm = dc * 10;
  const pokemonHeight = Math.floor(cm);
  return pokemonHeight;
};

// export const hexToRgb = (hex: string) => {
//   const getColorValue = (fromN: number, toN: number) =>
//     parseInt(hex.slice(fromN, toN), 16);

//   const r = getColorValue(1, 3);
//   const g = getColorValue(3, 5);
//   const b = getColorValue(5, 7);

//   return {r, g, b};
// };

export const getMoves = (pokemonMoves: any[]) => {
  const shownMoves: any[] = [];

  pokemonMoves?.map(moveGroup => {
    const moves = Object.values(moveGroup.move);
    shownMoves.push(moves[0]);
  });

  return shownMoves;
};

export const newShade = (hexColor: string | undefined, magnitude: number) => {
  hexColor = hexColor!.replace('#', '');
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);

    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};

export const validateUserInput = (input: string) => {
  const acceptedValue = /^[a-z0-9]+$/i;
  return acceptedValue.test(input) === false;
};

export const handleUserMessage = (
  username: string,
  isDiffAccount?: boolean,
) => {
  return isDiffAccount ? `Not ${username}?` : `Hello, ${username}`;
};

export const checkIfEmpty = (
  input: string,
  setEmptyField: (value: boolean) => void,
) => {
  if (input === '') {
    setEmptyField(true);
  } else {
    setEmptyField(false);
  }
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
