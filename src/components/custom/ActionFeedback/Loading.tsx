import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../../theme/colors';

function Loading(): JSX.Element {
  return (
    <View style={styles.itemsCenter}>
      <ActivityIndicator size="small" color={colors.onboardingButton} />
    </View>
  );
}
export default Loading;
