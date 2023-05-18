import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StartingScreen, Profile } from '../screens';
import SignIn from '../screens/SignIn/SignIn';
const Stack = createStackNavigator();
// @refresh reset
const MyNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartingScreen" component={StartingScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Profile" component={Profile} />
          {/*      <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Main" component={MainNavigator} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default MyNavigation;
