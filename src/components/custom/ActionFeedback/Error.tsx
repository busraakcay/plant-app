import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Text from '../Text';

function Error(): JSX.Element {
  return (
    <View style={styles.itemsCenter}>
      <Text style={styles.text} text="Bir şeyler ters gitti!" />
    </View>
  );
}
export default Error;
