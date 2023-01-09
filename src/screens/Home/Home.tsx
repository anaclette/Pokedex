import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import Pokemon from '../../components/Pokemon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './home.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Home = () => {
  const {top} = useSafeAreaInsets();
  return (
    <SafeAreaView style={[{top: top}]}>
      <Icon name="bat" size={30} />
      <View style={styles.imgWrapper}>
        <Image
          source={require('../../assets/pokebola.png')}
          style={styles.pokeimg}
        />
      </View>
      <Pokemon />
    </SafeAreaView>
  );
};
