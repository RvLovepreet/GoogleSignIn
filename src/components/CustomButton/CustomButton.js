import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme';
import { Colors } from '../../theme/Variables';
const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
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
  },
  titleStyle: {
    color: Colors.white,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
