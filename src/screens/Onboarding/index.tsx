import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import GetStarted from '../../components/GetStarted';
import Onboarding1 from '../../components/Onboarding1';
import Onboarding2 from '../../components/Onboarding2';
import Paywall from '../../components/Paywall';
import {screens} from '../../constants/screens';
import {saveFirstOpening} from '../../helpers/asyncStorageHelper';

function Onboarding({navigation}: any): JSX.Element {
  const [pager, setPager] = useState<number>(0);

  function handleOnPress(page: number): void {
    setPager(page);
  }
  async function handlePaywallCloseButton(): Promise<void> {
    navigation.navigate(screens.BottomTabNavigator);
    saveFirstOpening();
  }

  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      colors={[colors.white2, colors.white6]}
      style={styles.linearGradient}>
      {pager === 0 && <GetStarted onPress={async () => handleOnPress(1)} />}
      {pager === 1 && <Onboarding1 onPress={async () => handleOnPress(2)} />}
      {pager === 2 && <Onboarding2 onPress={async () => handleOnPress(3)} />}
      {pager === 3 && (
        <Paywall
          onPress={async () => {
            handlePaywallCloseButton();
          }}
        />
      )}
    </LinearGradient>
  );
}

export default Onboarding;
