import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontFamily: 'Quicksand-SemiBold',
    left: '8%',
    marginBottom: '5%',
    fontSize: 16,
  },
  fullMovesWrapper: {
    paddingHorizontal: 15,
  },
  fullMovesItem: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 15,
  },
  moveItem: {
    fontSize: 15,
    margin: 6,
    textTransform: 'capitalize',
    fontFamily: 'SourceSansPro-Regular',
  },
  seeFullContentText: {
    marginLeft: '5%',
  },
  seeLessContentText: {
    marginTop: '5%',
    alignSelf: 'center',
  },
  moveItemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    textDecorationLine: 'underline',
    fontFamily: 'Ubuntu-Medium',
  },
});
