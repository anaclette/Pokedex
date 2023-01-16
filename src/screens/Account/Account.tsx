import React from 'react';
import {View, Text, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Account = () => {
  const {top} = useSafeAreaInsets();
  const isIos = Platform.OS === 'ios';
  const topValue = isIos ? top : top + 10;
  return (
    <View style={{top: topValue}}>
      <Text>My account</Text>
    </View>
  );
};
