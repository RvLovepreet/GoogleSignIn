import React from 'react';
import { View, Text } from 'react-native';
import { heightPercentageToDP as hp } from '../../theme';
import { FontSize, Colors } from '../../theme/Variables';
const CustomInfo = ({ field, value }) => {
  return (
    <View style={{ borderBottomWidth: 1, padding: hp('1%') }}>
      <Text style={{ fontSize: FontSize.regular, color: Colors.primary }}>
        {field}
      </Text>
      <Text style={{ fontSize: FontSize.small }}>{value}</Text>
    </View>
  );
};
export default CustomInfo;
