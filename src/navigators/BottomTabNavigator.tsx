import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../theme/colors';
import {SvgXml} from 'react-native-svg';
import home from '../assets/svgs/home.svg';
import diagnose from '../assets/svgs/diagnose.svg';
import garden from '../assets/svgs/garden.svg';
import profile from '../assets/svgs/profile.svg';
import identify from '../assets/svgs/identify.svg';

const Tab = createBottomTabNavigator();
function BottomTabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.onboardingButton,
        tabBarInactiveTintColor: colors.grey,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => <SvgXml width="25" height="25" xml={home} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <SvgXml width="25" height="25" xml={diagnose} />,
        }}
        name="Diagnose"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: () => (
            <SvgXml
              style={{marginBottom: 35}}
              width="74"
              height="64"
              xml={identify}
            />
          ),
        }}
        name="Identify"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <SvgXml width="25" height="25" xml={garden} />,
        }}
        name="My Garden"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <SvgXml width="25" height="25" xml={profile} />,
        }}
        name="Profile"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;