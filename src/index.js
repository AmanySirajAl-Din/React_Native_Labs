import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const App = () => {
  return (
    // <SafeAreaView> for notch
    <SafeAreaView>
      <Text>Hello World</Text>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

export default App;
