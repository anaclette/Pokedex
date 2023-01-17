import React, {useState} from 'react';
import {Platform, TextInput, View} from 'react-native';
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
  const isIos = Platform.OS === 'ios';
  const topValue = isIos ? top : top + 10;

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue, onDebounce]);

  return (
    <View style={{top: topValue, ...styles.container}}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={inputValue}
        onChangeText={setInputValue}
        style={{...styles.textInput, height: top}}
        placeholder="Search"
        placeholderTextColor={'gray'}
      />
      <Icon style={styles.searchIcon} name="magnify" size={30} color="brown" />
    </View>
  );
};
