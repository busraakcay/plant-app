import {Image, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {Category} from '../../../constants/interfaces';
import {styles} from './styles';

interface IndexProps {
  item: Category;
}

function index({item}: IndexProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text} text={item.title} />
      <Image source={{uri: item.image.url}} style={styles.image} />
    </View>
  );
}

export default index;
