import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import message from '../../../assets/svgs/message.svg';
import arrow from '../../../assets/svgs/arrow.svg';
import Text from '../Text';

function index(props: {title: string; description: string}): JSX.Element {
  return (
    <View style={styles.container}>
      <View  style={styles.innerContainer}>
        <SvgXml width="46" height="46" xml={message} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText} text={props.title} />
          <Text style={styles.descriptionText} text={props.description} />
        </View>
      </View>
      <SvgXml width="24" height="24" xml={arrow} />
    </View>
  );
}

export default index;
