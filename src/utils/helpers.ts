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

export const hexToRgb = (hex: string) => {
  const getColorValue = (fromN: number, toN: number) =>
    parseInt(hex.slice(fromN, toN), 16);

  const r = getColorValue(1, 3);
  const g = getColorValue(3, 5);
  const b = getColorValue(5, 7);

  return {r, g, b};
};

export const getMoves = (pokemonMoves: any[]) => {
  const shownMoves: any[] = [];

  pokemonMoves?.map(moveGroup => {
    const moves = Object.values(moveGroup.move);
    shownMoves.push(moves[0]);
  });

  return shownMoves;
};

// export const lightIntensity = (r: number, g: number, b: number) => {
//   let [lumR, lumG, lumB] = [r, g, b].map(item => {
//     let proportion = item / 255;

//     return proportion <= 0.03928
//       ? proportion / 12.92
//       : Math.pow((proportion + 0.055) / 1.055, 2.4);
//   });

//   return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
// };

// export const contrastRatio = (
//   lightFirstValue: number,
//   lightSecondValue: number,
// ) => {
//   let lighter = Math.max(lightFirstValue, lightSecondValue);
//   let darker = Math.min(lightFirstValue, lightSecondValue);

//   return (lighter + 0.05) / (darker + 0.05);
// };

// export const checkContrast = (colorOne: string, colorTwo: string) => {
//   let [lightIntensityOne, lightIntensityTwo] = [colorOne, colorTwo].map(
//     color => {
//       color.startsWith('#') ? color.slice(1) : color;

//       return hexToRgb(color);
//     },
//   );
//   return contrastRatio(lightIntensityOne, lightIntensityTwo);
// };
