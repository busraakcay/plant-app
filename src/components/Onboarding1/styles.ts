import {Dimensions, StyleSheet} from 'react-native';
import {fonts} from '../../theme/fonts';

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
    marginTop: 16,
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
    bottom: -width * 0.031,
    right: -width * 0.022,
    width: width * 0.3,
    height: width * 0.025,
  },
  image: {
    width: width,
    height: height * 0.78,
    top: width * 0.07,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  button: {
    bottom: width * 0.25,
  },
});
