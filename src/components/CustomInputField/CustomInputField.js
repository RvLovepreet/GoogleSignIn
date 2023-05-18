import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from '../../theme';
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
    marginBottom: hp('1%'),
  },
});
