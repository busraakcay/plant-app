import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.onboardingButton,
    borderRadius: 12,
    marginHorizontal: 18,
    height: 56,
    marginBottom: 16,
  },
  text: {
    color: colors.white2,
    fontWeight: '500',
  },
});
