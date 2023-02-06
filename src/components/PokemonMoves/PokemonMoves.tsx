import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, Text, TouchableHighlight, View} from 'react-native';
import {TranslationKeys} from '../../locale/translations/keys';
import globalStyles from '../../themes/globalStyles';
import {PokemonFullDetails} from '../../types/Pokemon';
import {getMoves} from '../../utils/helpers';
import {styles} from './pokemonMoves.style';

interface Props {
  pokemon: PokemonFullDetails;
  onFullMovesPress: () => void;
  fullMoves: boolean;
  textColor: string | undefined;
  titleColor: string;
  titleSize: {};
  itemTextSize: {};
}

export const PokemonMoves = ({
  pokemon,
  onFullMovesPress,
  fullMoves,
  textColor,
  titleColor,
  titleSize,
  itemTextSize,
}: Props) => {
  const moves = getMoves(pokemon.moves);
  const maxShown = 10;
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...globalStyles.textShadow,
          ...styles.title,
          color: titleColor,
          ...titleSize,
        }}>{`${t(TranslationKeys.MOVES)} (${moves.length})`}</Text>
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
              color: titleColor,
              ...styles.fullMovesItem,
              ...itemTextSize,
            }}>
            {moves.join('  ·  ')}
          </Text>
          <TouchableHighlight
            accessibilityRole="button"
            accessibilityLabel={t(TranslationKeys.SEE_LESS) as string}
            onPress={onFullMovesPress}
            activeOpacity={0.5}
            underlayColor={textColor}>
            <Text
              style={{
                ...styles.buttonText,
                ...styles.seeLessContentText,
                color: titleColor,
                ...itemTextSize,
              }}>
              {t(TranslationKeys.SEE_LESS)}
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
                color: titleColor,
                ...styles.moveItem,
                ...itemTextSize,
              }}>
              {`${index !== 0 && ' ⊛ '} ${move}`}
            </Text>
          ))}
          {moves.length > maxShown && (
            <>
              <Text
                style={{
                  color: titleColor,
                  ...styles.moveItem,
                  ...itemTextSize,
                }}>
                ...
              </Text>
              <TouchableHighlight
                accessibilityRole="button"
                accessibilityLabel={String(t(TranslationKeys.SEE_ALL))}
                onPress={onFullMovesPress}
                activeOpacity={0.5}
                underlayColor={textColor}>
                <Text
                  style={{
                    ...styles.buttonText,
                    ...styles.seeFullContentText,
                    color: titleColor,
                    ...itemTextSize,
                  }}>
                  {t(TranslationKeys.SEE_ALL)}
                </Text>
              </TouchableHighlight>
            </>
          )}
        </View>
      )}
    </View>
  );
};
