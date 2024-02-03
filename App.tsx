import React, {useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import theme from '@theme/index';

import store from '@store/index';
import Routes from '@routes/index';
import {Alert, Linking, Platform} from 'react-native';
import notifee, {EventType} from '@notifee/react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ANDROID_CLIENT_ID, IOS_CLIENT_ID} from '@env';
import messaging from '@react-native-firebase/messaging';
import onMessageReceived from 'src/utils/notifeeHandler';
import handleNotification from 'src/utils/notificationHandler';

notifee.onBackgroundEvent(async ({type, detail}) => {
  try {
    const user = await store.getState().auth?.user;
    if (user) {
      if (type === EventType.PRESS) {
        Linking.openURL('com.ppfitness.app://notification');
      }
    }
  } catch (error) {
    console.log(error);
  }
});

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
    const token = await messaging().getToken();
    console.log('token', token);
  }, []);
  //
  useEffect(() => {
    notifee.onForegroundEvent(handleNotification);
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  // React.useEffect(() => {
  //   notifee.onForegroundEvent(async ({type, detail}) => {
  //     try {
  //       const user = await store.getState().auth.user;
  //       if (user) {
  //         if (type === EventType.PRESS) {
  //           Linking.openURL('com.ppfitness.app://notification');
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  //   console.log('onMessage2');
  // }, []);

  const prefixes = ['com.ppfitness.app://'];

  const config = {
    screens: {
      mealPlan: {
        screens: {},
      },
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
