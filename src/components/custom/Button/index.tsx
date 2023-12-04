import {Pressable, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Text from '../Text';

function index(props: {
  style?: object;
  onPress?: () => void;
  text: string;
}): JSX.Element {
  return (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
      <Text text={props.text} style={styles.text} />
    </Pressable>
  );
}

export default index;
