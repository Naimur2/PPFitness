import React, {useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import theme from '@theme/index';

import store from '@store/index';
import Routes from '@routes/index';
import {Platform} from 'react-native';
import notifee from '@notifee/react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ANDROID_CLIENT_ID, IOS_CLIENT_ID} from '@env';
import messaging from '@react-native-firebase/messaging';
import onMessageReceived from 'src/utils/notifeeHandler';
import handleNotification from 'src/utils/notificationHandler';

export default function App() {
  //
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        Platform.OS === 'android' ? ANDROID_CLIENT_ID : IOS_CLIENT_ID,
    });
  }, []);

  //
  React.useEffect(async () => {
    messaging().onMessage(onMessageReceived);
  }, []);

  // React.useEffect(() => {
  //   notifee.cancelAllNotifications();
  // }, []);
  //
  useEffect(() => {
    notifee.onForegroundEvent(handleNotification);
  }, []);

  const prefixes = ['ppfitness://'];

  const config = {
    screens: {
      mealPlan: 'meal-plan/:day',
      AudioCall: 'call/:channelName/:token/:uid',
    },
  };

  const linking = {
    prefixes,
    config,
  };

  return (
    <>
      <Provider store={store}>
        <NavigationContainer linking={linking}>
          <NativeBaseProvider theme={theme}>
            <Routes />
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}
