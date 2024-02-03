/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//

import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import onMessageReceived from 'src/utils/notifeeHandler';
import handleNotification from 'src/utils/notificationHandler';
// //

notifee.onBackgroundEvent(handleNotification);
messaging().setBackgroundMessageHandler(async remoteMessage => {
  onMessageReceived(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
