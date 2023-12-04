import {View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Text from '../custom/Text';
import Button from '../custom/Button';
import {styles} from './styles';
import ProcessDots from '../custom/ProcessDots';

function index(props: {onPress: () => {}}): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.rowText}>
          <Text style={styles.text} text="Take a photo to " />
          <View>
            <Text style={styles.identifyText} text="identify" />
            <Image
              style={styles.identifyLine}
              source={require('../../assets/images/line1.jpeg')}
            />
          </View>
        </View>
        <Text style={styles.text} text="the plant!" />
      </View>
      <Image
        testID="plant-image"
        style={styles.image}
        source={require('../../assets/images/onboarding1.jpeg')}
      />
      <ProcessDots number={1} />
      <Button style={styles.button} text="Continue" onPress={props.onPress} />
    </SafeAreaView>
  );
}

export default index;
