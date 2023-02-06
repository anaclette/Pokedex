import React from 'react';
import {StyleProp, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../themes/metrics';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';

interface Props {
  onPress: () => void;
  underlayColor: string | undefined;
  buttonStyle?: StyleProp<any>;
  iconColor: string | undefined;
  iconStyle?: StyleProp<any>;
}
export const BackButton = ({
  onPress,
  underlayColor,
  buttonStyle,
  iconColor,
  iconStyle,
}: Props) => {
  const {t} = useTranslation();
  return (
    <TouchableHighlight
      accessibilityRole="button"
      accessibilityLabel={String(t(TranslationKeys.GO_BACK_BUTTON_LABEL))}
      underlayColor={underlayColor}
      activeOpacity={0.4}
      onPress={onPress}
      style={buttonStyle}>
      <Icon
        accessibilityRole="image"
        style={iconStyle}
        size={metrics.scale(30)}
        name="arrow-left"
        color={iconColor}
      />
    </TouchableHighlight>
  );
};
