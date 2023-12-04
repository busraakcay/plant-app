import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    alignItems: 'center',
  },
  image: {
    width: width * 0.6,
    height: width * 0.4,
    marginHorizontal: 6,
    borderRadius: 12,
  },
  text: {
    fontSize: 15,
    position: 'absolute',
    width: width * 0.55,
    textAlign: 'center',
    bottom: width * 0.4 * 0.05,
    color: colors.white2,
  },
});
