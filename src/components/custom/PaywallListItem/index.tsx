import {Pressable, View, ListRenderItemInfo} from 'react-native';
import React from 'react';
import Text from '../Text';
import {styles} from './styles';
import {Premium} from '../../../utils/premium';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../theme/colors';

interface PaywallListItemProps {
  item: Premium;
  selectedId: string;
  setSelectedId: (id: string) => void;
}

function index({
  item,
  selectedId,
  setSelectedId,
}: PaywallListItemProps): JSX.Element {
  return (
    <Pressable
      onPress={() => {
        setSelectedId(item.id);
      }}
      style={[
        styles.container,
        item.id === selectedId && styles.selectedContainer,
      ]}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={[
          item.id === selectedId ? colors.onboardingButton2 : colors.white6,
          item.id === selectedId ? colors.onboardingButton3 : colors.white6,
        ]}
        style={styles.linearGradient}>
        <View style={styles.innerContainer}>
          <View
            style={[styles.dot, item.id === selectedId && styles.selectedDot]}>
            {item.id === selectedId && <View style={styles.fillDot}></View>}
          </View>
          <View>
            <Text style={styles.title} text={item.title} />
            <Text style={styles.description} text={item.description} />
          </View>
        </View>
        {item.discount > 0 && (
          <View style={styles.discountContainer}>
            <Text style={styles.discountText} text={`Save ${item.discount}%`} />
          </View>
        )}
      </LinearGradient>
    </Pressable>
  );
}

export default index;
