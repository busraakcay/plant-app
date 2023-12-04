import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../../theme/colors';

function Loading({testID}: any): JSX.Element {
  return (
    <View testID={testID} style={styles.itemsCenter}>
      <ActivityIndicator size="small" color={colors.onboardingButton} />
    </View>
  );
}
export default Loading;
