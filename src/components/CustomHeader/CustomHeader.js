import React from 'react';
import { View, Text } from 'react-native';
import { FontSize, Colors } from '../../theme/Variables';
const CustomHeader = ({ title }) => {
  return (
    <View style={{ fontSize: FontSize.large }}>
      <Text
        style={{
          backgroundColor: Colors.primary,
          fontSize: FontSize.large,
          color: Colors.white,
        }}
      >
        {title}
      </Text>
    </View>
  );
};
export default CustomHeader;
