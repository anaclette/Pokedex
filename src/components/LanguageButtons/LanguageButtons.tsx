import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {switchLanguage} from '../../state/reducers/i18nReducer';
import colors from '../../themes/colors';
import Button from '../Button';
import {styles} from './languageButtons.style';
import {TranslationKeys} from '../../locale/translations/keys';

export const LanguageButtons = () => {
  const dispatch = useAppDispatch();
  const {i18n, t} = useTranslation();
  const languageOptions = useAppSelector(
    state => state.languages.supportedLangs,
  );
  return (
    <View style={styles.container}>
      <Button
        style={styles.languageOptionWrapper}
        accessibilityLabel={t(TranslationKeys.FLAG_BUTTON_IMAGE)}
        accessibilityRole="button"
        activeOpacity={0.5}
        underlayColor={colors.transparent}
        onPress={() => {
          dispatch(switchLanguage(languageOptions.es));
          i18n.changeLanguage(languageOptions.es);
        }}
        children={
          <Image
            style={styles.flagImage}
            source={require('../../assets/images/argentina_flag.jpeg')}
          />
        }
      />

      <Button
        style={styles.languageOptionWrapper}
        accessibilityLabel={t(TranslationKeys.FLAG_BUTTON_IMAGE)}
        accessibilityRole="button"
        activeOpacity={0.5}
        underlayColor={colors.transparent}
        onPress={() => {
          dispatch(switchLanguage(languageOptions.en));
          i18n.changeLanguage(languageOptions.en);
        }}
        children={
          <Image
            style={styles.flagImage}
            source={require('../../assets/images/USA_flag.webp')}
          />
        }
      />
    </View>
  );
};
