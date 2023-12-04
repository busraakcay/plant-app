import {View, Image, ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
import Text from '../custom/Text';
import Button from '../custom/Button';
import {styles} from './styles';
import onboardingPhone from '../../assets/svgs/onboardingPhone.svg';
import {SvgXml} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../theme/colors';
import ProcessDots from '../custom/ProcessDots';

function index(props: {onPress: () => {}}): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.rowText}>
          <Text style={styles.text} text="Get plant " />
          <Text style={styles.identifyText} text="care guides" />
          <Image
            style={styles.identifyLine}
            source={require('../../assets/images/line2.jpeg')}
          />
        </View>
      </View>
      <ImageBackground
        source={require('../../assets/images/onboarding2Background.jpeg')}
        style={styles.background}>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/images/onboarding2.jpeg')}
          />
          <View style={styles.svgContainer}>
            <SvgXml width="160" height="180" xml={onboardingPhone} />
          </View>
        </View>
      </ImageBackground>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[colors.white2, colors.onboardingLinear]}
        style={styles.linearGradient}
      />
      <View style={styles.buttonContainer}>
        <Button text="Continue" onPress={props.onPress} />
      </View>
      <ProcessDots number={2} style={styles.dots} />
    </SafeAreaView>
  );
}

export default index;
