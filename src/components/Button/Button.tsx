import React from 'react';
import {TouchableHighlight, StyleProp, AccessibilityRole} from 'react-native';

interface ButtonProps {
  accessibilityLabel: string;
  activeOpacity: number;
  underlayColor?: string;
  onPress: () => void;
  accessibilityState?: {disabled: boolean};
  disabled?: boolean;
  children: JSX.Element;
  style?: StyleProp<any>;
  accessibilityRole?: AccessibilityRole | undefined;
  testID?: string;
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
  accessibilityRole,
  testID,
}: ButtonProps) => {
  return (
    <TouchableHighlight
      testID={testID}
      accessibilityRole={accessibilityRole}
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
