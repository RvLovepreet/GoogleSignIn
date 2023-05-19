import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  CustomInputField,
  SignInButton,
  CustomHeader,
  Loader,
} from '../../components';
import { ContainerStyle } from '../Commonstyle';
import { widthPercentageToDP as wp } from '../../theme';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const SignIn = ({ navigation }) => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      setLoader(true);
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
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <CustomHeader title="Sign In" />
          <View style={[ContainerStyle.mainContainer, styles.contentContainer]}>
            <CustomInputField title="Name" />
            <CustomInputField title="Password" />
            <SignInButton onPress={() => signIn()} title="Signin With Google" />
          </View>
        </>
      )}
    </>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  contentContainer: {
    padding: wp('2%'),
  },
});
