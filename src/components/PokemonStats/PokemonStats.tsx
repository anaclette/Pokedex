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
  titleSize: {};
  itemTextSize: {};
}

export const PokemonStats = ({
  pokemon,
  color,
  titleColor,
  titleSize,
  itemTextSize,
}: Props) => {
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
          ...titleSize,
        }}>
        {t(TranslationKeys.BASE_STATS)}
      </Text>
      {stats.map((statGroup, index) => {
        const topFillWidth = 100;
        const statWidth =
          statGroup.base_stat > topFillWidth
            ? topFillWidth
            : statGroup.base_stat;
        const statColor = String(
          colors.baseStats[baseStatsColors[index] as keyof Object],
        );

        return (
          <View style={styles.rowContainer} key={statGroup + index.toString()}>
            <View
              style={styles.nameWrapper}
              key={statGroup.stat.name + index.toString()}>
              <Text
                style={{
                  ...styles.statName,
                  color: color,
                  ...itemTextSize,
                }}
                key={statGroup.stat.name}>
                {statGroup.stat.name}
              </Text>
            </View>

            <View style={styles.bar}>
              <View
                style={{
                  width: statWidth + '%',
                  backgroundColor: statColor,
                  ...styles.statValueWrapper,
                }}>
                <Text
                  style={{
                    ...itemTextSize,
                    ...styles.statItem,

                    width:
                      statWidth < topFillWidth ? statWidth + '10%' : statWidth,
                  }}>
                  {statGroup.base_stat}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
