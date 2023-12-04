import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  dotContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 100,
    backgroundColor: colors.grey,
    marginHorizontal: 3,
  },
  selectedDot: {
    width: 9,
    height: 9,
    borderRadius: 100,
    backgroundColor: colors.black,
  },
});
