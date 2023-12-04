import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: colors.white4,
    borderWidth: 0.5,
    borderRadius: 14,
    marginBottom: 10,
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedContainer: {
    borderColor: colors.onboardingButton,
    borderWidth: 1.5,
  },
  title: {
    color: colors.white,
    fontWeight: '500',
  },
  description: {
    color: colors.white3,
    fontSize: 12,
    lineHeight: 14,
  },
  dot: {
    backgroundColor: colors.white6,
    padding: 12,
    marginRight: 10,
    borderRadius: 100,
  },
  selectedDot: {
    backgroundColor: colors.onboardingButton,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillDot: {
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: 100,
  },
  discountContainer: {
    position: 'absolute',
    top: -3,
    right: -5,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: colors.onboardingButton,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  linearGradient: {
    flex: 1,
    padding: 14,
    borderRadius: 14,
  },
});
