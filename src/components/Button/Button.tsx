import React from 'react';
import {TouchableHighlight, StyleProp} from 'react-native';

interface ButtonProps {
  accessibilityLabel: string;
  activeOpacity: number;
  underlayColor?: string;
  onPress: () => void;
  accessibilityState?: {disabled: boolean};
  disabled?: boolean;
  children: JSX.Element;
  style?: StyleProp<any>;
}

export const Button = ({
  accessibilityLabel,
  activeOpacity,
  underlayColor,
  onPress,
  accessibilityState,
  disabled,
  children,
  style,
}: ButtonProps) => {
  return (
    <TouchableHighlight
      style={style}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      activeOpacity={activeOpacity}
      underlayColor={underlayColor}
      onPress={onPress}
      accessibilityState={accessibilityState}
      disabled={disabled}>
      {children}
    </TouchableHighlight>
  );
};
