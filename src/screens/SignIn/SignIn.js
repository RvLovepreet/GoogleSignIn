import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { CustomInputField } from '../../components';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { TouchableOpacity } from 'react-native';
const SignIn = () => {
  useEffect(() => {
    GoogleSignin.configure();
    console.log();
  }, []);

  const signIn = async () => {
    try {
      console.log('hello');
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'dsfasdfa');
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
    <View>
      <TouchableOpacity onPress={() => signIn()}>
        <Text>hello World</Text>
      </TouchableOpacity>
      <View>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
          /*  disabled={this.state.isSigninInProgress} */
        />
      </View>
    </View>
  );
};
export default SignIn;
