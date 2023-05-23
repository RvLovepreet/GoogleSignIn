import React from 'react';
import { View, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { FontSize, Colors } from '../../theme/Variables';
const CustomInfo = ({ field, value }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        borderBottomWidth: 1,
        padding: hp('1%'),
      }}
    >
      <View>
        <Text style={{ fontSize: hp('2%'), color: Colors.primary }}>
          {field}
        </Text>
        <Text style={{ fontSize: hp('2%') }}>{value}</Text>
      </View>
    </View>
  );
};
export default CustomInfo;
