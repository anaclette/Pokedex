import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import {logIn, logOut} from '../../state/reducers/authReducer';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {checkIfEmpty, validateUserInput} from '../../utils/helpers';
import {styles} from './account.style';
import Button from '../../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIos} from '../../common/constants';
import colors from '../../themes/colors';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';

export const Account = () => {
  const [userInput, setUserInput] = useState('');
  const [emptyField, setEmptyField] = useState(false);
  const dispatch = useAppDispatch();
  const username = useAppSelector(state => state.auth.username);
  const minLength = 5;
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();

  const isDisabled = () => {
    return userInput.length < minLength || validateUserInput(userInput);
  };

  const handleUserMessage = (user: string, notPrevUser?: boolean) => {
    return t(
      !notPrevUser
        ? TranslationKeys.NOT_USERNAME
        : TranslationKeys.GREET_USERNAME,
      {username: user},
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/images/pokeball_wallpaper.jpeg')}
      style={{...styles.container, paddingTop: isIos ? top * 2 : top + 70}}>
      {!username && (
        <View style={styles.loginWrapper}>
          <View style={styles.textInputWrapper}>
            {/* TODO: fix image going up when keyboard pops up */}
            <TextInput
              maxLength={20}
              autoFocus={true}
              accessible={true}
              accessibilityLabel={
                t(TranslationKeys.USERNAME_INPUT_LABEL) as string
              }
              autoCorrect={false}
              keyboardType="default"
              style={styles.textInput}
              placeholderTextColor={colors.indigoFocusColor}
              placeholder={t(TranslationKeys.USERNAME_PLACEHOLDER) as string}
              onChangeText={input => {
                checkIfEmpty(input, setEmptyField);
                setUserInput(input);
              }}
            />
          </View>
          <View style={styles.warningContainer}>
            <Text
              accessible={true}
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
              accessible={true}
              accessibilityHint={String(
                t(TranslationKeys.USERNAME_ALPHANUMERIC_ONLY),
              )}
              style={styles.warningText}>
              {userInput !== '' &&
                validateUserInput(userInput) &&
                t(TranslationKeys.USERNAME_ALPHANUMERIC_ONLY)}
            </Text>
          </View>
          <Button
            style={styles.button}
            underlayColor={colors.transparent}
            disabled={isDisabled()}
            accessibilityState={{disabled: isDisabled()}}
            accessibilityLabel={t(TranslationKeys.SIGN_IN)}
            activeOpacity={0.8}
            onPress={() => dispatch(logIn(userInput))}
            children={
              <Text style={styles.buttonText}>
                {t(TranslationKeys.SIGN_IN)}
              </Text>
            }
          />
        </View>
      )}
      {username && (
        <View style={styles.diffAccountContainer}>
          <View style={styles.storedUserNameContainer}>
            <Text
              style={{...styles.storedUserName, ...styles.userInput}}
              accessible={true}
              accessibilityHint={String(
                t(TranslationKeys.USERNAME_MATCH_STORED),
              )}>
              {handleUserMessage(username, true)}
            </Text>
            <Button
              style={styles.button}
              underlayColor={colors.transparent}
              accessibilityLabel={t(TranslationKeys.LOG_OUT)}
              activeOpacity={0.8}
              onPress={() => dispatch(logOut())}
              children={
                <Text style={styles.buttonText}>
                  {t(TranslationKeys.LOG_OUT)}
                </Text>
              }
            />
          </View>
          <View style={styles.diffUserNameContainer}>
            <Text style={{...styles.diffUserNameMessage, ...styles.userInput}}>
              {handleUserMessage(username)}
            </Text>
            <Button
              style={styles.button}
              underlayColor={colors.transparent}
              accessibilityLabel={t(TranslationKeys.SIGN_IN_DIFF_ACCOUNT)}
              activeOpacity={0.8}
              onPress={() => dispatch(logOut())}
              children={
                <Text style={styles.buttonText}>
                  {t(TranslationKeys.SIGN_IN_DIFF_ACCOUNT)}
                </Text>
              }
            />
          </View>
        </View>
      )}
    </ImageBackground>
  );
};
