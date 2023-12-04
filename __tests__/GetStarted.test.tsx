import 'react-native';
import React from 'react';
import GetStarted from '../src/components/GetStarted';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <GetStarted
      onPress={function (): {} {
        throw new Error('Function not implemented.');
      }}
    />,
  );
});
