import React, {useLayoutEffect, useState} from 'react';
import {screens} from '../constants/screens';
import Onboarding from '../screens/Onboarding';
import BottomTabNavigator from './BottomTabNavigator';
import {checkFirstOpening} from '../helpers/asyncStorageHelper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function StackNavigator(): JSX.Element {
  const Stack = createNativeStackNavigator();

  const [initialRoute, setInitialRoute] = useState<string>('');

  useLayoutEffect(() => {
    checkFirstOpening().then(res => {
      if (res === 'true') {
        setInitialRoute(screens.BottomTabNavigator);
      } else {
        setInitialRoute(screens.Onboarding);
      }
    });
  });

  return (
    <>
      {initialRoute !== '' && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
          initialRouteName={initialRoute}>
          <Stack.Screen name={screens.Onboarding} component={Onboarding} />
          <Stack.Screen
            name={screens.BottomTabNavigator}
            component={BottomTabNavigator}
          />
        </Stack.Navigator>
      )}
    </>
  );
}

export default StackNavigator;
