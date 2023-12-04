import {
  ImageBackground,
  Keyboard,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Text from '../../components/custom/Text';
import {SvgXml} from 'react-native-svg';
import search from '../../assets/svgs/search.svg';
import PremiumBox from '../../components/custom/PremiumBox';
import QuestionsList from '../../components/custom/QuestionsList';
import CategoriesList from '../../components/custom/CategoriesList';

function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <ImageBackground
          style={[styles.innerContainer, styles.imgBackground]}
          source={require('../../assets/images/searchBackground.jpeg')}>
          <View style={styles.textContainer}>
            <Text style={styles.text} text="Hi, plant lover!" />
            <Text style={styles.afternoonText} text="Good Afternoon! ⛅" />
          </View>
          <View style={styles.inputContainer}>
            <SvgXml width="20" height="20" xml={search} />
            <TextInput style={styles.input} placeholder="Search for plants" />
          </View>
        </ImageBackground>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <PremiumBox
            title="FREE Premium Available"
            description="Tap to upgrade your account!"
          />
          <Text style={styles.title} text="Get Started" />
        </View>
        <QuestionsList />
        <CategoriesList />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
