import React from 'react';
import {Image, View, SafeAreaView} from 'react-native';
import {styles} from './styles';
import Text from '../custom/Text';
import Button from '../custom/Button';

function index(props: {onPress: () => {}}): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.rowText}>
          <Text style={styles.welcomeText} text="Welcome to " />
          <Text style={styles.welcomeAppText} text="PlantApp" />
        </View>
        <Text
          style={styles.descriptionText}
          text="Identify more than 3000+ plants and 88% accuracy."
        />
      </View>
      <Image
        style={styles.image}
        source={require('../../assets/images/getStarted.jpeg')}
      />
      <Button text="Get Started" onPress={props.onPress} />
      <Text
        style={styles.bottomText}
        text="By tapping next, you are agreeing to PlantID"
      />
      <View style={styles.bottomRowText}>
        <Text
          style={[styles.bottomText, styles.bottomTextUnderline]}
          text="Terms of Use "
        />
        <Text style={styles.bottomText} text="& " />
        <Text
          style={[styles.bottomText, styles.bottomTextUnderline]}
          text="Privacy Policy."
        />
      </View>
    </SafeAreaView>
  );
}

export default index;
