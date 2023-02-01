import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import colors from '../../themes/colors';
import {styles} from './fadeInImage.style';

interface Props {
  uri: string;
  imgStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const FadeInImage = ({
  uri,
  imgStyle = {},
  containerStyle = {},
}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const onError = () => setIsLoading(false);

  return (
    <View style={containerStyle ? containerStyle : styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.loader}
          color={colors.dark}
          size={30}
        />
      )}

      <Animated.Image
        source={{uri}}
        onError={onError}
        onLoad={finishLoading}
        style={{
          ...(imgStyle as ImageStyle),
          opacity,
        }}
      />
    </View>
  );
};
