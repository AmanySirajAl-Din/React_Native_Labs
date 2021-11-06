import React from 'react';
import {View, TextInput, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import {COLORS, SharedStyles} from '../../common';

import styles from './styles';

const SearchBar = () => {
  return (
    <View style={[SharedStyles.w100, SharedStyles.center, styles.container]}>
      <TextInput
        style={[
          SharedStyles.center,
          SharedStyles.bgSpaceCadet,
          SharedStyles.h100,
          styles.inputContainer,
        ]}
        placeholder={'Enter movie name ...'}
        placeholderTextColor={COLORS.sun}
      />
      <Pressable
        style={[
          SharedStyles.center,
          SharedStyles.bgSpaceCadet,
          SharedStyles.h100,
          styles.iconContainer,
        ]}>
        <Icon name="magnifying-glass" size={30} color={COLORS.sun} />
      </Pressable>
    </View>
  );
};

export {SearchBar};

// Touchable for touch effect
// Pressable because of the custom touch area
