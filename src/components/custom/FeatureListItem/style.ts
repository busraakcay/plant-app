import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white6,
    marginRight: 8,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    width: width * 0.43,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '600',
    marginTop: 16,
    letterSpacing: 0.7,
  },
  description: {
    color: colors.white3,
    marginTop: 4,
    letterSpacing: 0.4,
  },
});
