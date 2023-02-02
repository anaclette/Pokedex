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
}

export const PokemonAbilities = ({
  pokemon,
  backgroundColor,
  textColor,
}: Props) => {
  const {t} = useTranslation();
  return (
    <View style={{backgroundColor, ...styles.abilitiesWrapper}}>
      <Text style={{color: textColor, ...styles.title}}>
        {t(TranslationKeys.ABILITIES)}
      </Text>
      {pokemon.abilities.map((ability, index) => (
        <Text
          key={ability.ability.name + index.toString()}
          style={{color: textColor, ...styles.listItem}}>
          {ability.ability.name}
        </Text>
      ))}
    </View>
  );
};
