import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
