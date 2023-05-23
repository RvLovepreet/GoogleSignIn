import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { CustomHeader, CustomButton, CustomInfo } from '../../components';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Common } from '../../theme/Variables';
import { removeKey } from '../../store/user';
import { ImagePath } from '../../theme/Variables';
import { useDispatch, useSelector } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Profile = ({ navigation }) => {
  const user = useSelector(data => data.user);
  console.log(user, 'user in profile');
  const dispatch = useDispatch();

  const signOut = async () => {
    try {
      console.log('successfully log out');
      const obj = {
        id: '',
        name: '',
        email: '',
        givenName: '',
        familyName: '',
        photo: '',
      };
      dispatch(removeKey(obj));
      const isUserExist = await isSignedIn();
      if (isUserExist) {
        await GoogleSignin.signOut();
      }
    } catch (error) {
      console.error(error, 'iuserdsf');
    } finally {
      navigation.navigate('StartingScreen');
    }
  };
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log(isSignedIn);
    return isSignedIn;
  };
  return (
    <>
      <CustomHeader title="Profile" />
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.profileImage}
            source={user.photo ? { uri: user.photo } : ImagePath.userImage}
          />
          <CustomInfo field={Common.name} value={user.name} />
          <CustomInfo field={Common.email} value={user.email} />
          <CustomInfo field={Common.familyName} value={user.givenName} />
          <CustomButton
            title={Common.signout}
            CustomStyle={styles.btnCustomStyle}
            onPress={() => signOut()}
          />
        </View>
      </View>
    </>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    paddingTop: hp('2%'),
    paddingBottom: hp('3%'),
    paddingLeft: wp('12%'),
    paddingRight: wp('12%'),
  },
  profileImage: {
    alignSelf: 'center',
    marginTop: hp('2%'),
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  btnCustomStyle: {
    marginTop: hp('3%'),
  },
});
