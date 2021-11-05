import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from './';

export default StyleSheet.create({
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgSpaceCadet: {
    backgroundColor: COLORS.spaceCadet,
    color: COLORS.white,
  },
  bgOxfordBlue: {
    backgroundColor: COLORS.oxfordBlue,
    color: COLORS.white,
  },
  mainFont: {
    fontFamily: FONTS.medium,
  },
});
