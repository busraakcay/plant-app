import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: colors.black2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: colors.premium1,
    fontWeight: '500',
    lineHeight: 16,
  },
  descriptionText: {
    fontSize: 13,
    fontWeight: '300',
    color: colors.premium2,
    lineHeight: 22,
  },
  textContainer: {
    marginLeft: 8,
  },
});
