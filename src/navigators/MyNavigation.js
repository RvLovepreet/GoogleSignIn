import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
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

  useEffect(() => {
    // getToken();
    messaging().setBackgroundMessageHandler(onMessageReceived);
    //   messaging().onMessage(onMessageReceived);
    // messaging().onNotificationOpenedApp(remoteMessage => {
    //   //  console.log('hello world1');
    //   console.log(
    //     'Notification caused app to open from background state:',
    //     remoteMessage.notification,
    //   );
    //   // navigation.navigate(remoteMessage.data.type);
    // });
    // messaging().setBackgroundMessageHandler(async remoteMessage => {});
    // Check whether an initial notification is available
    /*  messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );

          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        //  setLoading(false);
      }); */
    /*  const unsubscribe = messaging().onMessage(async remoteMessage => {
      const channelId = await notifee.createChannel({
        id: '123',
        name: 'android',
      });
      await notifee.displayNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        android: {
          channelId,
          actions: [
            {
              title: 'Reply',
              icon: 'https://my-cdn.com/icons/reply.png',
              pressAction: {
                id: '123',
              },
              input: {
                allowFreeFormInput: true, // set to false
                choices: ['Yes', 'No', 'Maybe'],
                placeholder: 'Reply to Sarah...',
              }, // enable free text input
            },
          ],
        },
      });
    }); */
    // return unsubscribe;
  }, []);
  async function onMessageReceived(remoteMessage) {
    /*   const { type, timestamp } = message.data; */

    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId: '123',
        actions: [
          {
            title: 'Reply',
            icon: 'https://my-cdn.com/icons/reply.png',
            pressAction: {
              id: '123',
            },
            input: {
              allowFreeFormInput: true, // set to false
              choices: ['Yes', 'No', 'Maybe'],
              placeholder: 'Reply to Sarah...',
            }, // enable free text input
          },
        ],
      },
    });
  }

  /*   async function onMessageReceived(message) {
    console.log(message, 'this is message my notification message');
  } */
  /*   const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log(token, 'hello there is token');
  }; */
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
