import React from 'react';
import {ScrollView, Text, TouchableHighlight, View} from 'react-native';
import {PokemonFullDetails} from '../../types/Pokemon';
import {getMoves} from '../../utils/helpers';
import {styles} from './pokemonMoves.style';

interface Props {
  pokemon: PokemonFullDetails;
  onFullMovesPress: () => void;
  fullMoves: boolean;
  textColor: string | undefined;
  imgColor: string | undefined;
}

// const PokeIcon = (color: string) => {
//   return (
//     <Icon
//       name="pokeball"
//       color={color}
//       size={25}
//     />
//   );
// };

export const PokemonMoves = ({
  pokemon,
  onFullMovesPress,
  fullMoves,
  textColor,
  imgColor,
}: Props) => {
  const moves = getMoves(pokemon.moves);
  const maxShown = 10;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Movimientos (${moves.length})`}</Text>
      {fullMoves ? (
        <ScrollView
          style={[
            {
              backgroundColor: textColor,
              ...styles.fullMovesWrapper,
            },
          ]}>
          <Text
            style={{
              color: imgColor,
              ...styles.fullMovesItem,
            }}>
            {moves.join('  ·  ')}
          </Text>
          <TouchableHighlight
            accessibilityRole="button"
            accessibilityLabel="See less moves"
            onPress={onFullMovesPress}
            activeOpacity={0.5}
            underlayColor={textColor}>
            <Text
              style={{
                ...styles.buttonText,
                ...styles.seeLessContentText,
                color: imgColor,
              }}>
              Ver menos
            </Text>
          </TouchableHighlight>
        </ScrollView>
      ) : (
        <View
          style={{
            ...styles.moveItemsWrapper,
          }}>
          {moves.slice(0, maxShown).map((move, index) => (
            <Text
              key={index}
              style={{
                color: imgColor,
                ...styles.moveItem,
              }}>
              {`${index !== 0 && ' ⊛ '} ${move}`}
            </Text>
          ))}
          {moves.length > maxShown && (
            <>
              <Text
                style={{
                  color: imgColor,
                  ...styles.moveItem,
                }}>
                ...
              </Text>
              <TouchableHighlight
                accessibilityRole="button"
                accessibilityLabel="See full moves"
                onPress={onFullMovesPress}
                activeOpacity={0.5}
                underlayColor={textColor}>
                <Text
                  style={{
                    ...styles.buttonText,
                    ...styles.seeFullContentText,
                    color: imgColor,
                  }}>
                  Ver todos
                </Text>
              </TouchableHighlight>
            </>
          )}
        </View>
      )}
    </View>
  );
};
