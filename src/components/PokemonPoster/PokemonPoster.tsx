import React, {useEffect, useState} from 'react';
import {View, Image, StyleProp} from 'react-native';
import {useAppSelector} from '../../state/hooks';
import {styles} from './pokemonPoster.style';

interface Props {
  viewTop: number;
  imgHeight: number;
  style?: StyleProp<any>;
}

export const PokemonPoster = ({viewTop, imgHeight, style}: Props) => {
  const currentLanguage = useAppSelector(state => state.languages.lang);
  const langOptionChange = useAppSelector(
    state => state.languages.supportedLangs.es,
  );
  const [defaultPoster, setDefaultPoster] = useState(
    require('../../assets/images/title_img_en.png'),
  );

  useEffect(() => {
    langOptionChange === currentLanguage
      ? setDefaultPoster(require('../../assets/images/title_img_es.png'))
      : setDefaultPoster(require('../../assets/images/title_img_en.png'));
  }, [currentLanguage, langOptionChange]);

  return (
    <View style={{...style, top: viewTop}}>
      <Image
        accessibilityRole="image"
        source={defaultPoster}
        style={{
          ...styles.poster,
          height: imgHeight,
        }}
      />
    </View>
  );
};
