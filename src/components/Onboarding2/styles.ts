import {Dimensions, StyleSheet} from 'react-native';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
  },
  text: {
    fontFamily: fonts.rubikBold,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '500',
  },
  textContainer: {
    marginLeft: 24,
    marginTop: 20,
    marginBottom: 30,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  identifyText: {
    fontFamily: fonts.rubikExtraBold,
    fontSize: 24,
    lineHeight: 30,
  },
  identifyLine: {
    position: 'absolute',
    bottom: -width * 0.052,
    right: width * 0.23,
    width: width * 0.4,
    height: width * 0.05,
  },
  image: {
    width: width * 0.7,
    height: height * 0.7,
    alignSelf: 'center',
    marginTop: width * 0.1,
    resizeMode: 'contain',
  },
  background: {
    width: width,
    height: height * 0.6,
    resizeMode: 'cover',
  },
  svgContainer: {
    position: 'absolute',
    top: -height * 0.002,
    right: width * 0.02,
  },
  linearGradient: {
    flex: 1,
    opacity: 0.3,
  },
  buttonContainer: {
    height: width * 0.29,
  },
  dots: {
    bottom: width * 0.06,
  },
});
