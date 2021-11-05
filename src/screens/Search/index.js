// import axios from 'axios';
import React from 'react';
import {View} from 'react-native';
import {SearchBar} from '../../components';

import styles from './styles';

export default function Search() {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
}
