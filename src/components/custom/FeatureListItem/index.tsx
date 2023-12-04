import {ListRenderItemInfo, Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {SvgXml} from 'react-native-svg';
import {Feature} from '../../../utils/features';
import unlimited from '../../../assets/svgs/unlimited.svg';
import faster from '../../../assets/svgs/faster.svg';

function index({item}: ListRenderItemInfo<Feature>): JSX.Element {
  return (
    <View style={styles.container}>
      <SvgXml
        width="36"
        height="35"
        xml={item.name === 'Faster' ? faster : unlimited}
      />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

export default index;
