import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton } from '../../../components';
const Footer = ({ index, navigation, flatListRef }) => {
  return (
    <View style={styles.footer}>
      <Text>-----</Text>
      <CustomButton
        title="Next"
        onPress={() => {
          if (index == 3) {
            navigation.navigate('SignIn');
          } else {
            setTimeout(() => flatListRef.scrollToIndex({ index: index }), 200);
          }
        }}
        style={{ borderWidth: 1 }}
      />
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
