import {StyleSheet} from 'react-native';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  footerLoader: {
    justifyContent: 'flex-start',
    paddingTop: '30%',
    paddingBottom: metrics.scaleVertical(400),
  },
});
