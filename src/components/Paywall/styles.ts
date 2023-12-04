import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paywallBackground,
  },
  premiumContainer: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  background: {
    width: width,
    height: height * 0.6,
    alignSelf: 'center',
  },
  innerContainer: {
    marginTop: height * 0.35,
    marginLeft: 16,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 27,
    lineHeight: 35,
    fontWeight: '300',
  },
  appText: {
    fontWeight: '700',
  },
  descriptionText: {
    fontSize: 17,
    color: colors.white3,
    letterSpacing: 0.5,
  },
  bottomTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  bottomText: {
    color: colors.white5,
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'center',
    letterSpacing: -0.1,
    lineHeight: 12,
  },
  finalBottomText: {
    color: colors.white5,
    fontSize: 11,
    letterSpacing: 0.2,
    marginTop: 6,
  },
  closeButton: {
    position: 'absolute',
    right: width * 0.04,
    top: height * 0.07,
    backgroundColor: colors.black1,
    width: 24,
    height: 24,
    padding: 14,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
