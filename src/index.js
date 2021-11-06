import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {SharedStyles} from './common';
import {SearchScreen} from './screens';

const App = () => {
  return (
    // <SafeAreaView> for notch
    // <StatusBar barStyle={'light-content'} />
    // <Text>Hello World</Text>
    <SafeAreaView style={[SharedStyles.bgOxfordBlue, SharedStyles.h100]}>
      <SearchScreen />
    </SafeAreaView>
  );
};

export default App;
