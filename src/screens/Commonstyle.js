import React from 'react';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../theme';
export const ContainerStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    padding: hp('2%'),
  },
});
