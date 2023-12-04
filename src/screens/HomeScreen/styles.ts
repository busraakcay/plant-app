import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  text: {
    lineHeight: 18,
    letterSpacing: 0.4,
    marginBottom: 8,
  },
  afternoonText: {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.4,
    fontWeight: '500',
  },
  textContainer: {
    marginTop: width * 0.1,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: colors.white,
    opacity: 0.95,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  input: {
    flex: 1,
    height: 30,
    marginLeft: 8,
    color: colors.black1,
  },
  innerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  imgBackground: {
    borderBottomWidth: 0.2,
    borderBottomColor: colors.grey
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    marginTop: 18,
    fontWeight: '500',
    letterSpacing: -0.24,
    color: colors.mainText,
  },
});
