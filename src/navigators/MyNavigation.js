import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  StartingScreen,
  Profile,
  FileUploadScreen,
  ImageUpload,
} from '../screens';
import SignIn from '../screens/SignIn/SignIn';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const AuthenticationScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="welcomeScreens"
    >
      <Stack.Screen name="StartingScreen" component={StartingScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};
const ProfileScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Profile"
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UploadImage" component={ImageUpload} />
    </Stack.Navigator>
  );
};
const MyNavigation = () => {
  const key = useSelector(data => data.user.id);
  console.log(key, 'reacft');

  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        {/*  <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FileUploadScreen" component={FileUploadScreen} />
        </Stack.Navigator> */}
        {!key ? <AuthenticationScreen /> : <ProfileScreen />}

        {/*  <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!key ? (
            <>
              <Stack.Screen name="StartingScreen" component={StartingScreen} />
              <Stack.Screen name="SignIn" component={SignIn} />

            </>
          ) : (
            <Stack.Screen name="Profile" component={Profile} />
          )}
        </Stack.Navigator> */}
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default MyNavigation;
