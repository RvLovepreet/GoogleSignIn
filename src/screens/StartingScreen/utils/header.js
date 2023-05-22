import React from 'react';
import { View, Text, /*  TouchableOpacity, */ StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { FontSize, Colors } from '../../../theme/Variables';
const Header = ({ onPress }) => {
  return (
    <View style={styles.skipContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textStyle}>SKIP</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  skipContainer: {
    alignItems: 'flex-end',
    padding: hp('1%'),
  },
  textStyle: {
    fontSize: hp('2%'),
    color: Colors.lightBlack,
  },
});
