import React from 'react';
import {StyleProp, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {isIos} from '../../common/constants';

interface Props {
  onPress: () => void;
  underlayColor: string | undefined;
  buttonStyle?: StyleProp<any>;
  iconColor: string | undefined;
}
export const BackButton = ({
  onPress,
  underlayColor,
  buttonStyle,
  iconColor,
}: Props) => {
  return (
    <TouchableHighlight
      accessibilityRole="imagebutton"
      accessibilityLabel="Go back icon"
      underlayColor={underlayColor}
      activeOpacity={0.4}
      onPress={onPress}
      style={buttonStyle}>
      <Icon size={isIos ? 25 : 35} name="arrow-left" color={iconColor} />
    </TouchableHighlight>
  );
};
