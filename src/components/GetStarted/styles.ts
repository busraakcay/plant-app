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
  textContainer: {
    marginTop: 4,
    marginLeft: 24,
    width: width * 0.8,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 50,
  },
  welcomeAppText: {
    fontSize: 28,
    fontFamily: fonts.rubikBlack,
    fontWeight: '600',
    lineHeight: 50,
  },
  descriptionText: {
    color: colors.greyText,
    opacity: 0.7,
    lineHeight: 22,
  },
  image: {
    width: width,
    height: height * 0.65,
    top: width * 0.07,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bottomRowText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    color: colors.greyText,
    opacity: 0.5,
    fontSize: 11,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 15,
  },
  bottomTextUnderline: {
    textDecorationLine: 'underline',
  },
});
