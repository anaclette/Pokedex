import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'pink',
    marginTop: '10%',
  },
  columnWrapper: {
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    flexGrow: 1,
    marginHorizontal: '2%',
  },
  title: {
    fontFamily: 'Quicksand-SemiBold',
  },
  listItem: {
    fontFamily: 'SourceSansPro-Black',
    marginVertical: '1%',
  },
});
