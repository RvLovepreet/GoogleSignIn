import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { CustomInputField, SignInButton, CustomHeader } from '../../components';
import { ContainerStyle } from '../Commonstyle';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { TouchableOpacity } from 'react-native';
import { FontSize, Colors } from '../../theme/Variables';

const SignIn = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure();
    console.log();
  }, []);

  const signIn = async () => {
    try {
      console.log('hello');
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      navigation.navigate('Profile', { user: userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <>
      <CustomHeader title="Sign In" />
      <View style={ContainerStyle.mainContainer}>
        <View style={{ justifyContent: 'space-between' }}>
          <CustomInputField title="Name" />
          <CustomInputField title="Password" />
          <SignInButton onPress={() => signIn()} title="Signin With Google" />
        </View>
      </View>
    </>
  );
};
export default SignIn;
