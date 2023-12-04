import {Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

function index(props: {text: string; style?: object}): JSX.Element {
  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
}

export default index;
