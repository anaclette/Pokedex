import React from 'react';
import {ScrollView, Text, TouchableHighlight, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonFullDetails} from '../../types/Pokemon';
import {getMoves} from '../../utils/helpers';
import {styles} from './pokemonMoves.style';

interface Props {
  pokemon: PokemonFullDetails;
  onFullMovesPress: () => void;
  fullMoves: boolean;
  textColor: string;
  imgColor: string;
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
  const {top} = useSafeAreaInsets();
  const moves = getMoves(pokemon.moves);
  const maxShown = 10;
  return (
    <View>
      <Text style={styles.title}>{`Movimientos (${moves.length})`}</Text>
      {fullMoves ? (
        <ScrollView
          style={[
            {
              backgroundColor: textColor,
              top: top - 250,
              ...styles.fullMovesWrapper,
            },
          ]}>
          <Text
            style={{
              color: imgColor,
              ...styles.fullMovesItem,
            }}>
            {moves.join(' ⊛ ')}
          </Text>
        </ScrollView>
      ) : (
        <View
          style={{
            backgroundColor: imgColor,
            ...styles.moveItemsWrapper,
          }}>
          {moves.slice(0, maxShown).map((move, index) => (
            <Text
              key={index}
              style={{
                color: textColor,
                ...styles.moveItem,
              }}>
              {`${index !== 0 && ' ⊛ '} ${move}`}
            </Text>
          ))}
          {moves.length > maxShown && (
            <Text
              style={{
                color: textColor,
                ...styles.moveItem,
              }}>
              ...
            </Text>
          )}
        </View>
      )}
      {moves.length > maxShown && (
        <TouchableHighlight
          accessibilityRole="button"
          accessibilityLabel="See full moves"
          onPress={onFullMovesPress}
          underlayColor={fullMoves ? textColor : imgColor}
          style={
            fullMoves
              ? {...styles.showFullMovesBtn}
              : {backgroundColor: imgColor}
          }>
          <Text
            style={[
              styles.buttonText,
              fullMoves
                ? {...styles.seeLessContentText, color: imgColor}
                : styles.seeFullContentText,
            ]}>
            {fullMoves ? 'Ver menos' : 'Ver todos los movimientos'}
          </Text>
        </TouchableHighlight>
      )}
    </View>
  );
};
