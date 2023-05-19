import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../../theme/Variables';
const Loader = () => {
  return (
    <ActivityIndicator
      show={true}
      size={60}
      color={Colors.primary}
      style={{ flex: 1 }}
    />
  );
};
export default Loader;
