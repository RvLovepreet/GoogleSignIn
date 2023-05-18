import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../theme/Variables';
const Slider = ({ index, curIndex }) => {
  console.log(index, 'index dsfa');
  if (index == curIndex) {
    console.log('hello');
  }
  return <View style={[styles.viewStyle]} />;
};
export default Slider;
const styles = StyleSheet.create({
  viewStyle: {
    width: 10,
    height: 10,
    backgroundColor: Colors.primary,
    marginLeft: 4,
    borderRadius: 50,
  },
  viewStyle1: {
    width: 30,
  },
});
