import colors from './colors';
import metrics from './metrics';

export default {
  textShadow: {
    textShadowOffset: {
      width: metrics.scale(1),
      height: metrics.scale(-1),
    },
    textShadowColor: colors.lightText,
    textShadowRadius: metrics.scale(3),
    elevation: metrics.scale(8),
  },
};
