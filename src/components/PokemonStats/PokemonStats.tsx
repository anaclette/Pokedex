import React from 'react';
import {useTranslation} from 'react-i18next';
import {Animated, Text, View} from 'react-native';
import globalStyles from '../../themes/globalStyles';
import {PokemonFullDetails} from '../../types/Pokemon';
import {styles} from './pokemonStats.style';
import {TranslationKeys} from '../../locale/translations/keys';

interface Props {
  pokemon: PokemonFullDetails;
  color: string;
  titleColor: string;
}

export const PokemonStats = ({pokemon, color, titleColor}: Props) => {
  const {t} = useTranslation();
  const stats = pokemon.stats;

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
                ...styles.listItem,
                ...styles.statName,
                color: color,
              }}
              key={statGroup.stat.name}>
              {statGroup.stat.name}
            </Text>
          </View>

          <Animated.View style={styles.bar}>
            <Text
              style={[
                // {width: progressStatus + '%', backgroundColor: 'red'},
                styles.listItem,
              ]}>
              {statGroup.base_stat}
            </Text>
          </Animated.View>
        </View>
      ))}
    </View>
  );
};
