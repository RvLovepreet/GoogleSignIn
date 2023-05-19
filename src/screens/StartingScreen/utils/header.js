import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from '../../../theme';
import { FontSize, Colors } from '../../../theme/Variables';
const Header = ({ onPress }) => {
  return (
    <View style={styles.skipContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ fontSize: FontSize.small, color: Colors.lightBlack }}>
          SKIP
        </Text>
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
});
