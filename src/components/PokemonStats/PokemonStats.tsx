import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import globalStyles from '../../themes/globalStyles';
import {PokemonFullDetails} from '../../types/Pokemon';
import {styles} from './pokemonStats.style';
import {TranslationKeys} from '../../locale/translations/keys';
import colors from '../../themes/colors';

interface Props {
  pokemon: PokemonFullDetails;
  color: string;
  titleColor: string;
}

export const PokemonStats = ({pokemon, color, titleColor}: Props) => {
  const {t} = useTranslation();
  const stats = pokemon.stats;
  const baseStatsColors = Object.keys(colors.baseStats);

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...globalStyles.textShadow,
          ...styles.title,
          color: titleColor,
        }}>
        {t(TranslationKeys.BASE_STATS)}
      </Text>
      {stats.map((statGroup, index) => (
        <View style={styles.rowContainer} key={statGroup + index.toString()}>
          <View
            style={styles.nameWrapper}
            key={statGroup.stat.name + index.toString()}>
            <Text
              style={{
                ...styles.statName,
                color: color,
              }}
              key={statGroup.stat.name}>
              {statGroup.stat.name}
            </Text>
          </View>

          <View style={styles.bar}>
            <View
              style={{
                width: statGroup.base_stat + '%',
                backgroundColor: String(
                  colors.baseStats[baseStatsColors[index] as keyof Object],
                ),
                ...styles.statValueWrapper,
              }}>
              <Text style={styles.statItem}>{statGroup.base_stat}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
