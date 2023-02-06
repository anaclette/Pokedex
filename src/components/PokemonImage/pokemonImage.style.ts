import {StyleSheet} from 'react-native';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
    right: '10%',
  },
  image: {
    flex: 1,
    top: metrics.scaleVertical(25),
  },
});
