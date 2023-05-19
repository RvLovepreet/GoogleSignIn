import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from '../../theme';
import { FontSize } from '../../theme/Variables';
const { height, width } = Dimensions.get('window');
const CustomInputField = ({ title }) => {
  return (
    <>
      <Text>{title}</Text>
      <TextInput style={styles.inputField} />
    </>
  );
};
export default CustomInputField;
const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    width: width * 0.96,
    height: height * 0.08,
    fontSize: FontSize.regular,
    marginBottom: height * 0.02,
  },
});
