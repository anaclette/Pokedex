import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import {logIn, logOut} from '../../state/reducers/authReducer';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {
  checkIfEmpty,
  handleUserMessage,
  validateUserInput,
} from '../../utils/helpers';
import {styles} from './account.style';
import Button from '../../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIos} from '../../common/constants';

export const Account = () => {
  const [userInput, setUserInput] = useState('');
  const [emptyField, setEmptyField] = useState(false);
  const dispatch = useAppDispatch();
  const username = useAppSelector(state => state.auth.username);
  const minLength = 5;
  const {top} = useSafeAreaInsets();

  const isDisabled = () => {
    return userInput.length < minLength || validateUserInput(userInput);
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
              accessibilityLabel="username input"
              autoCorrect={false}
              keyboardType="default"
              style={styles.textInput}
              placeholderTextColor={'gray'}
              placeholder="username"
              onChangeText={input => {
                checkIfEmpty(input, setEmptyField);
                setUserInput(input);
              }}
            />
          </View>
          <View style={styles.warningContainer}>
            <Text
              accessible={true}
              accessibilityHint={
                'Validates if username is not empty and is longer than 4 characters.'
              }
              style={styles.warningText}>
              {userInput !== '' &&
                userInput.length < minLength &&
                'Username must be at least five characters long.'}
              {emptyField && 'Username is required'}
            </Text>
            <Text
              accessible={true}
              accessibilityHint={
                'Validates if username has no special characters.'
              }
              style={styles.warningText}>
              {userInput !== '' &&
                validateUserInput(userInput) &&
                'Alphanumeric characters only.'}
            </Text>
          </View>
          <Button
            style={styles.button}
            underlayColor="transparent"
            disabled={isDisabled()}
            accessibilityState={{disabled: isDisabled()}}
            accessibilityLabel={'Sign in'}
            activeOpacity={0.8}
            onPress={() => dispatch(logIn(userInput))}
            children={<Text style={styles.buttonText}>Sign in</Text>}
          />
        </View>
      )}
      {username && (
        <View style={styles.diffAccountContainer}>
          <View style={styles.storedUserNameContainer}>
            <Text
              style={{...styles.storedUserName, ...styles.userInput}}
              accessible={true}
              accessibilityHint={'Verifies if current user matches logged in.'}>
              {handleUserMessage(username)}
            </Text>
            <Button
              style={styles.button}
              underlayColor="transparent"
              accessibilityLabel={'Log out'}
              activeOpacity={0.8}
              onPress={() => dispatch(logOut())}
              children={<Text style={styles.buttonText}>Log out</Text>}
            />
          </View>
          <View style={styles.diffUserNameContainer}>
            <Text style={{...styles.diffUserNameMessage, ...styles.userInput}}>
              {handleUserMessage(username, true)}
            </Text>
            <Button
              style={styles.button}
              underlayColor="transparent"
              accessibilityLabel={'Sign with a different account.'}
              activeOpacity={0.8}
              onPress={() => dispatch(logOut())}
              children={
                <Text style={styles.buttonText}>
                  Sign with a different account.
                </Text>
              }
            />
          </View>
        </View>
      )}
    </ImageBackground>
  );
};
