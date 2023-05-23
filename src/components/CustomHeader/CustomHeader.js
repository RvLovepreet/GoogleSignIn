import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontSize, Colors } from '../../theme/Variables';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CustomHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
export default CustomHeader;
const styles = StyleSheet.create({
  headerContainer: { backgroundColor: Colors.primary, paddingLeft: hp('2%') },
  headerTitle: {
    fontSize: hp('5%'),
    fontWeight: '700',
    color: Colors.white,
  },
});
