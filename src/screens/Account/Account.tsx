import React, {useCallback, useState} from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import {logIn, logOut} from '../../state/reducers/authReducer';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {
  checkIfEmpty,
  validateUserInput,
  capitalizeFirstLetter,
} from '../../utils/helpers';
import {styles} from './account.style';
import Button from '../../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIos} from '../../common/constants';
import colors from '../../themes/colors';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';
import metrics from '../../themes/metrics';
import LanguageButtons from '../../components/LanguageButtons';
import {cleanUpFavourites} from '../../state/reducers/favouritesReducer';

export const Account = () => {
  const [userInput, setUserInput] = useState('');
  const [emptyField, setEmptyField] = useState(false);
  const dispatch = useAppDispatch();
  const username = useAppSelector(state => state.auth.username);
  const minLength = 5;
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();

  const isDisabled = useCallback(() => {
    return userInput.length < minLength || validateUserInput(userInput);
  }, [userInput]);

  const handleUserMessage = (
    user: string | null | undefined,
    notPrevUser?: boolean,
  ) => {
    return t(
      !notPrevUser
        ? TranslationKeys.NOT_USERNAME
        : TranslationKeys.GREET_USERNAME,
      {username: user},
    );
  };

  const getButtonText = useCallback(() => {
    return username ? t(TranslationKeys.LOG_OUT) : t(TranslationKeys.SIGN_IN);
  }, [t, username]);

  const LoginAndOutButton = useCallback(() => {
    return (
      <Button
        testID="login-and-out-button"
        style={styles.button}
        underlayColor={colors.transparent}
        disabled={!username && isDisabled()}
        accessibilityState={
          !username ? {disabled: isDisabled()} : {disabled: false}
        }
        accessibilityLabel={getButtonText()}
        accessibilityRole="button"
        activeOpacity={0.8}
        onPress={() => dispatch(username ? logOut() : logIn(userInput))}
        children={<Text style={styles.buttonText}>{getButtonText()}</Text>}
      />
    );
  }, [dispatch, getButtonText, isDisabled, userInput, username]);

  return (
    <ImageBackground
      source={require('../../assets/images/pokeball_wallpaper.jpeg')}
      style={{
        ...styles.container,
        paddingTop: isIos ? top * 2 : top + metrics.scale(30),
      }}>
      <LanguageButtons />
      {!username && (
        <View style={styles.loginWrapper}>
          <View style={styles.textInputWrapper}>
            <TextInput
              value={userInput}
              testID="account-screen-user-input"
              maxLength={15}
              autoFocus={true}
              accessibilityLabel={t(
                TranslationKeys.USERNAME_INPUT_LABEL,
              ).toString()}
              autoCorrect={false}
              keyboardType="default"
              style={styles.textInput}
              placeholderTextColor={colors.gray}
              placeholder={t(TranslationKeys.USERNAME_PLACEHOLDER).toString()}
              onChangeText={input => {
                checkIfEmpty(input, setEmptyField);
                setUserInput(input);
                capitalizeFirstLetter(input);
              }}
            />
          </View>
          <View style={styles.warningContainer}>
            <Text
              accessibilityHint={String(
                t(TranslationKeys.ACCESSIBILITY_HINT_USERNAME_REQS),
              )}
              style={styles.warningText}>
              {userInput !== '' &&
                userInput.length < minLength &&
                t(TranslationKeys.USERNAME_MIN_LENGTH)}
              {emptyField && t(TranslationKeys.USERNAME_REQUIRED)}
            </Text>
            <Text
              accessibilityHint={String(
                t(TranslationKeys.USERNAME_ALPHANUMERIC_ONLY),
              )}
              style={styles.warningText}>
              {userInput !== '' &&
                validateUserInput(userInput) &&
                t(TranslationKeys.USERNAME_ALPHANUMERIC_ONLY)}
            </Text>
          </View>
          {LoginAndOutButton()}
        </View>
      )}

      {username && (
        <>
          <View style={styles.diffAccountContainer}>
            <View style={styles.storedUserNameContainer}>
              <Text
                style={{...styles.storedUserName, ...styles.userInput}}
                accessibilityHint={String(
                  t(TranslationKeys.USERNAME_MATCH_STORED),
                )}>
                {handleUserMessage(username, true)}
              </Text>
              {LoginAndOutButton()}
            </View>
            <View style={styles.diffUserNameContainer}>
              <Text
                style={{...styles.diffUserNameMessage, ...styles.userInput}}>
                {handleUserMessage(username)}
              </Text>
              <Button
                accessibilityRole="button"
                style={styles.button}
                underlayColor={colors.transparent}
                accessibilityLabel={t(TranslationKeys.SIGN_IN_DIFF_ACCOUNT)}
                activeOpacity={0.8}
                onPress={() => {
                  dispatch(logOut());
                  dispatch(cleanUpFavourites());
                }}
                children={
                  <Text style={styles.buttonText}>
                    {t(TranslationKeys.SIGN_IN_DIFF_ACCOUNT)}
                  </Text>
                }
              />
            </View>
          </View>
        </>
      )}
    </ImageBackground>
  );
};
