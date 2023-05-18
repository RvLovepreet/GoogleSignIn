import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { FontSize } from '../../theme/Variables';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../theme';
const SignInButton = ({ title, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.BtnContainer}>
        <Image
          style={styles.logoStyle}
          source={require('../../theme/assets/images/googlelogo.png')}
        />
        <Text style={styles.BtnTitle}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default SignInButton;
const styles = StyleSheet.create({
  BtnContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('1%'),
  },
  logoStyle: { width: 30, height: 30, borderWidth: 1 },
  BtnTitle: { fontSize: FontSize.small, marginLeft: wp('1%') },
});
