import React from 'react';
import {Text, View} from 'react-native';
import {PokemonFullDetails} from '../../types/Pokemon';
import {convertDcToCm, convertLbToKg} from '../../utils/helpers';
import PokemonAbilities from '../PokemonAbilities';
import {styles} from './pokemonDetailsGrid.style';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';

interface Props {
  pokemon: PokemonFullDetails;
  lightColor: string | undefined;
  darkColor: string | undefined;
}

export const PokemonDetailsGrid = ({pokemon, darkColor, lightColor}: Props) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.detailsWrapper}>
        <Text style={{color: lightColor, ...styles.title}}>
          {t(TranslationKeys.WEIGHT)}
        </Text>
        <Text style={{color: lightColor, ...styles.listItem}}>
          {convertLbToKg(pokemon.weight)} kg
        </Text>
      </View>
      <View style={styles.detailsWrapper}>
        <Text style={{color: lightColor, ...styles.title}}>
          {t(TranslationKeys.HEIGHT)}
        </Text>
        <Text style={{color: lightColor, ...styles.listItem}}>
          {convertDcToCm(pokemon.height)} cm
        </Text>
      </View>
      <PokemonAbilities
        pokemon={pokemon}
        backgroundColor={lightColor}
        textColor={darkColor}
      />
    </View>
  );
};
