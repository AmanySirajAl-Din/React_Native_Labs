import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 6,
    marginTop: 20,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  inputContainer: {
    width: '80%',
    paddingStart: 16,
    fontSize: 16,
  },
  iconContainer: {
    borderStartColor: COLORS.sun,
    borderStartWidth: 1,
    backgroundColor: COLORS.cloudBurst,
    width: '20%',
  },
});
