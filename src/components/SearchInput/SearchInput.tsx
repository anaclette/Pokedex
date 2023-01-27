import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDebouncer} from '../../hooks/useDebouncer';
import {useEffect} from 'react';
import {styles} from './searchInput.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Search button"
        onPress={() => (inputValue !== '' ? setInputValue : '')}
        style={styles.searchIconButton}>
        <Icon name="magnify" size={30} color="brown" />
      </TouchableOpacity>
    </View>
  );
};
