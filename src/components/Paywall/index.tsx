import {
  ImageBackground,
  View,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Text from '../custom/Text';
import {styles} from './styles';
import {features, Feature} from '../../utils/features';
import {premium, Premium} from '../../utils/premium';
import FeatureListItem from '../custom/FeatureListItem';
import PaywallListItem from '../custom/PaywallListItem';
import Button from '../custom/Button';
import close from '../../assets/svgs/close.svg';
import {SvgXml} from 'react-native-svg';

const featuresData: Feature[] = features;
const premiumData: Premium[] = premium;

function index(props: {onPress: () => {}}): JSX.Element {
  const [selectedId, setSelectedId] = useState<string>('2');
  const renderPaywallListItem = ({item}: ListRenderItemInfo<Premium>) => (
    <PaywallListItem
      item={item}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/paywall.jpeg')}
        style={styles.background}>
        <View style={styles.innerContainer}>
          <View style={styles.rowText}>
            <Text style={[styles.text, styles.appText]} text="PlantApp " />
            <Text style={styles.text} text="Premium" />
          </View>
          <Text
            style={[styles.text, styles.descriptionText]}
            text="Access All Features"
          />
          <FlatList
            data={featuresData}
            keyExtractor={item => item.name}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={FeatureListItem}
          />
        </View>
        <View style={styles.premiumContainer}>
          <FlatList
            data={premiumData}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={renderPaywallListItem}
            extraData={selectedId}
          />
        </View>
        <Button text="Try free for 3 days" />
        <View style={styles.bottomTextContainer}>
          <Text
            style={styles.bottomText}
            text="After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable"
          />
          <Text
            style={styles.finalBottomText}
            text="Terms  •  Privacy  •  Restore"
          />
        </View>
        <Pressable style={styles.closeButton} onPress={props.onPress}>
          <SvgXml width="26" height="26" xml={close} />
        </Pressable>
      </ImageBackground>
    </ScrollView>
  );
}

export default index;
