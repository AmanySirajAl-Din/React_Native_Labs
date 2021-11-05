import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {SearchScreen} from './screens';

const App = () => {
  return (
    // <SafeAreaView> for notch
    <SafeAreaView>
      <Text>Hello World</Text>
      <StatusBar barStyle={'light-content'} />
      <SearchScreen />
    </SafeAreaView>
  );
};

export default App;
