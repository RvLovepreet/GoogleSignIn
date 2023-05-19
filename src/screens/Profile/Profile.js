import React from 'react';
import { View, Text, Image } from 'react-native';
import { CustomHeader, CustomInfo } from '../../components';
const Profile = ({ navigation, route }) => {
  const user = route.params.user.user;
  console.log(user, 'i amd in profile');
  return (
    <>
      <CustomHeader title="Profile" />
      <View>
        {/*   <Image source={require('../../theme/assets/images/logo.png')} /> */}
        <CustomInfo field="Name:" value={user.name} />
        <CustomInfo field="Email:" value={user.email} />
        <CustomInfo field="Family Name:" value={user.familyName} />
      </View>
    </>
  );
};
export default Profile;
