import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';

function index(props: {number: number; style?: object}): JSX.Element {
  return (
    <View style={[styles.dotContainer, props.style]}>
      <View style={[styles.dot, props.number === 1 && styles.selectedDot]} />
      <View style={[styles.dot, props.number === 2 && styles.selectedDot]} />
      <View style={styles.dot} />
    </View>
  );
}

export default index;
