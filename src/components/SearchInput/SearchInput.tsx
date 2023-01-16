import React from 'react';
import {Platform, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SearchInput = () => {
  const {top} = useSafeAreaInsets();
  const isIos = Platform.OS === 'ios';
  const topValue = isIos ? top : top + 10;
  return (
    <View style={{top: topValue}}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={{color: 'white', backgroundColor: 'black', height: top}}
        placeholder="Search"
      />
    </View>
  );
};
