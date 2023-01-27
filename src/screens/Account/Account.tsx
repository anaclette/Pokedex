import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIos} from '../../common/constants';

export const Account = () => {
  const {top} = useSafeAreaInsets();

  const topValue = isIos ? top : top + 10;
  return (
    <View
      style={{
        backgroundColor: 'rgba(255,255,255, 0.92)',
        flex: 1,
      }}>
      <Text style={{top: topValue}}>My account</Text>
    </View>
  );
};
