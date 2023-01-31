import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: '30%',
  },
  pikachuImg: {
    position: 'absolute',
    opacity: 0.8,
  },
  pokeballImg: {
    position: 'absolute',
    opacity: 0.8,
    width: 270,
    height: 270,
    top: '-5%',
    left: '-15%',
  },
  noFavsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginRight: 10,
    marginBottom: 10,
    marginTop: '20%',
    fontFamily: 'Ubuntu-Medium',
    fontSize: 35,
    alignSelf: 'flex-end',
  },
  subtitle: {
    fontFamily: 'Ubuntu-Light',
    fontSize: 15,
    alignSelf: 'center',
    bottom: '22%',
  },
  linkText: {
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    fontSize: 17,
    letterSpacing: 0.5,
  },
});
