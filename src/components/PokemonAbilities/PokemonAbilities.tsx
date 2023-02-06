import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {PokemonFullDetails} from '../../types/Pokemon';
import {styles} from './pokemonAbilities.style';
import {TranslationKeys} from '../../locale/translations/keys';

interface Props {
  pokemon: PokemonFullDetails;
  backgroundColor: string | undefined;
  textColor: string | undefined;
  titleSize: {};
  itemTextSize: {};
}

export const PokemonAbilities = ({
  pokemon,
  backgroundColor,
  textColor,
  titleSize,
  itemTextSize,
}: Props) => {
  const {t} = useTranslation();
  return (
    <View style={{backgroundColor, ...styles.abilitiesWrapper}}>
      <Text style={{color: textColor, ...styles.title, ...titleSize}}>
        {t(TranslationKeys.ABILITIES)}
      </Text>
      {pokemon.abilities.map((ability, index) => (
        <Text
          key={ability.ability.name + index.toString()}
          style={{
            color: textColor,
            ...styles.listItem,
            ...itemTextSize,
          }}>
          {ability.ability.name}
        </Text>
      ))}
    </View>
  );
};
