import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Quicksand-SemiBold',
    left: '8%',
    marginBottom: '1%',
  },
  fullMovesWrapper: {
    padding: '10%',
    borderRadius: 100,
  },
  fullMovesItem: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 17,
    fontFamily: 'SourceSansPro-Regular',
  },
  moveItem: {
    margin: 6,
    textTransform: 'capitalize',
    fontFamily: 'SourceSansPro-Regular',
  },
  showFullMovesBtn: {
    bottom: '20%',
  },
  seeFullContentText: {
    marginTop: '2%',
  },
  seeLessContentText: {
    fontSize: 20,
  },
  moveItemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textDecorationLine: 'underline',
    fontFamily: 'Ubuntu-Medium',
    alignSelf: 'center',
  },
});
