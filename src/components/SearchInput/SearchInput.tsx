import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDebouncer} from '../../hooks/useDebouncer';
import {useEffect} from 'react';
import {styles} from './searchInput.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Button';
import colors from '../../themes/colors';

interface Props {
  onDebounce: (userInput: string) => void;
}

export const SearchInput = ({onDebounce}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebouncer(inputValue, 1500);
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue, onDebounce]);

  return (
    <View style={{top: top + 15, ...styles.container}}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={colors.burgundy}
      />
      <Button
        underlayColor={colors.transparent}
        accessibilityRole="button"
        accessibilityLabel={'Search button'}
        activeOpacity={0.7}
        onPress={() => (inputValue !== '' ? setInputValue : '')}
        style={styles.searchIconButton}
        children={<Icon name="magnify" size={30} color="brown" />}
      />
    </View>
  );
};
