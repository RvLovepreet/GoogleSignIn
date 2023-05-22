import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  CustomInputField,
  SignInButton,
  CustomHeader,
  Loader,
} from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { addKey, addUser } from '../../store/user';
import { Dispatch } from 'react';
import { ContainerStyle } from '../Commonstyle';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { Common } from '../../theme/Variables';

const SignIn = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      setLoader(true);
      console.log('hello');
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const obj = {
        id: userInfo.user.id,
        name: userInfo.user.name,
        email: userInfo.user.email,
        givenName: userInfo.user.givenName,
        photo: userInfo.user.photo,
        /*    familyName: userInfo.user.familyName, */
      };
      dispatch(addKey(obj));
      setTimeout(() => navigation.navigate('Profile'), 500);
      /*    navigation.navigate('Profile'); */
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('2%'),
  },
});
