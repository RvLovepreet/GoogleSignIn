import React from 'react';
import { Text, /*  TouchableOpacity, */ StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Colors } from '../../theme/Variables';
const CustomButton = ({ title, onPress, CustomStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, CustomStyle]}
    >
      <Text style={[styles.titleStyle, CustomStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
const styles = StyleSheet.create({
  btnContainer: {
    paddingLeft: wp('10%'),
    paddingRight: wp('10%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    borderRadius: 50,
    backgroundColor: Colors.primary,
    marginTop: hp('2%'),
  },
  titleStyle: {
    fontSize: hp('2%'),
    color: Colors.white,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});
