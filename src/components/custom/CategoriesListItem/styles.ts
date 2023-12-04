import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,

    margin: 8,
  },
  image: {
    width: width * 0.0033 * 116,
    height: width * 0.0033 * 126,
    alignSelf: 'flex-end',
    borderRadius: 12,
  },
  text: {
    position: 'absolute',
    textAlign: 'left',
    fontWeight: '500',
    margin: 16,
    width: width * 0.0033 * 116 * 0.8,
  },
});
