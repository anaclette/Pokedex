import React, {useEffect, useRef, useState} from 'react';
import {Animated, Text, View} from 'react-native';
import {PokemonFullDetails} from '../../types/Pokemon';
import {styles} from './pokemonStats.style';

interface Props {
  pokemon: PokemonFullDetails;
}

export const PokemonStats = ({pokemon}: Props) => {
  // const anim = useRef(new Animated.Value(0)).current;
  const stats = pokemon.stats;
  // const [progressStatus, setProgressStatus] = useState(0);

  // const onAnimate = (stat: number) => {
  //   setProgressStatus(stat);
  //   Animated.timing(anim, {
  //     toValue: stat,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // useEffect(() => {
  //   stats.forEach(stat => {
  //     onAnimate(stat.base_stat);
  //     console.log(stat.base_stat);
  //   });
  // }, [stats]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estadísticas base</Text>
      {stats.map((statGroup, index) => (
        <View style={styles.rowContainer}>
          <View
            style={styles.nameWrapper}
            key={statGroup.stat.name + index.toString()}>
            <Text
              style={{
                ...styles.listItem,
                ...styles.statName,
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
