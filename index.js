/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//

import notifee, {AndroidImportance} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import handleNotification from 'src/utils/notificationHandler';
//

notifee.onBackgroundEvent(handleNotification);

async function onMessageReceived(data) {
  if (data?.data?.notifee) {
    const notifeeData = JSON.parse(data?.data?.notifee);
    const channel = notifeeData?.android?.channelId;
    if (channel) {
      // console.warn('channel', channel);
      await notifee.createChannel({
        id: channel,
        name: 'Message',
        sound: 'message',
        importance: AndroidImportance.HIGH,
      });
      notifee.displayNotification(JSON.parse(data?.data?.notifee));
    }
  }
}
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.warn('setBackgroundMessageHandler', remoteMessage);
  onMessageReceived(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
