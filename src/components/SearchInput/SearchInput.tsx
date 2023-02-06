import React, {useCallback, useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDebouncer} from '../../hooks/useDebouncer';
import {styles} from './searchInput.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Button';
import colors from '../../themes/colors';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';
import metrics from '../../themes/metrics';
import {isIos} from '../../common/constants';

interface Props {
  onDebounce: (userInput: string) => void;
}

export const SearchInput = ({onDebounce}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebouncer(inputValue, 1500);
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue, onDebounce]);

  const onPress = useCallback(() => {
    inputValue !== '' ? setInputValue : '';
  }, [inputValue]);

  return (
    <View style={{top: top + metrics.scale(15), ...styles.container}}>
      <TextInput
        autoCorrect={false}
        value={inputValue}
        onChangeText={setInputValue}
        style={{
          ...styles.textInput,
          fontSize: !isIos
            ? metrics.scaledFontSize(30)
            : metrics.scaledFontSize(13),
        }}
        placeholder={t(TranslationKeys.SEARCH_PLACEHOLDER) as string}
        placeholderTextColor={colors.burgundy}
      />
      <Button
        underlayColor={colors.transparent}
        accessibilityRole="button"
        accessibilityLabel={t(TranslationKeys.ACCESSIBILITY_SEARCH_LABEL)}
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.searchIconButton}
        children={
          <Icon
            accessibilityRole="image"
            name="magnify"
            size={metrics.scale(22)}
            color={colors.burgundy}
          />
        }
      />
    </View>
  );
};
