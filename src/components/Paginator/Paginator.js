import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ColorSchemeName } from 'react-native';
import { Colors } from '../../theme/Variables';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

let width = 10;
const Paginator = ({ Content, index, indexofView, customStyle }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Content.map((_, indexofarr) => {
        if (indexofarr == indexofView) {
          return (
            <View
              key={indexofarr}
              style={[styles.viewStyle, styles.CurrentView, customStyle]}
            />
          );
        } else {
          return (
            <View key={indexofarr} style={[styles.viewStyle, customStyle]} />
          );
        }
      })}
    </View>
  );
};
export default Paginator;
const styles = StyleSheet.create({
  viewStyle: {
    width: wp('4%'),
    height: hp('1.5%'),
    backgroundColor: Colors.primary,
    marginLeft: 4,
    borderRadius: 50,
  },
  CurrentView: {
    width: wp('15%'),
  },
});
