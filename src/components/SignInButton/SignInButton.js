import React from 'react';
import { Text, Image, StyleSheet, Dimensions } from 'react-native';
import { FontSize } from '../../theme/Variables';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ImagePath } from '../../theme/Variables';
const { height, width } = Dimensions.get('window');
const SignInButton = ({ title, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.BtnContainer}>
        <Image style={styles.logoStyle} source={ImagePath.logo} />
        <Text style={styles.BtnTitle}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default SignInButton;
const styles = StyleSheet.create({
  BtnContainer: {
    width: width * 0.8,
    height: height * 0.07,
    borderRadius: 40,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('1%'),
  },
  logoStyle: { width: wp('8%'), height: hp('5%') },
  BtnTitle: { fontSize: hp('2.5%'), marginLeft: wp('1%') },
});
