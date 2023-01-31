import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pokeballImg: {
    alignSelf: 'flex-end',
    opacity: 0.4,
  },
  nameAndTypesWrapper: {
    left: '13%',
  },
  scrollView: {
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  name: {
    marginBottom: 5,
    textTransform: 'capitalize',
    fontSize: 30,
    fontFamily: 'Quicksand-SemiBold',
  },
  typeItemWrapper: {
    borderRadius: 20,
    backgroundColor: 'pink',
  },
  typeItem: {
    textTransform: 'capitalize',
    fontFamily: 'SourceSansPro-Black',
    padding: 10,
  },
  loader: {
    alignSelf: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  marginLeft: {
    marginLeft: 8,
  },
});
