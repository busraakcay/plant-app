import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  itemsCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width * 0.1,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.4,
  },
});
