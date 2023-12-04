import {Image, ListRenderItemInfo, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {Question} from '../../../constants/interfaces';
import {styles} from './styles';

function index({item}: ListRenderItemInfo<Question>): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image_uri}} style={styles.image} />
      <Text style={styles.text} text={item.title} />
    </View>
  );
}

export default index;
