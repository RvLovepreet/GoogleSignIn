import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ColorSchemeName } from 'react-native';
import { Colors } from '../../theme/Variables';
let width = 10;
const Paginator = ({ Content, index, indexofView }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Content.map((arr, indexofarr) => {
        if (indexofarr == indexofView) {
          return <View style={[styles.viewStyle, styles.CurrentView]} />;
        } else {
          return <View style={[styles.viewStyle]} />;
        }
      })}
    </View>
  );
};
export default Paginator;
const styles = StyleSheet.create({
  viewStyle: {
    width: width,
    height: 10,
    backgroundColor: Colors.primary,
    marginLeft: 4,
    borderRadius: 50,
  },
  CurrentView: {
    width: 40,
  },
});
