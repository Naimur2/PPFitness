import notifee, {
  AndroidCategory,
  AndroidImportance,
} from '@notifee/react-native';
import React from 'react';
import CustomCallComponent from 'src/components/CustomCallComponent';

interface MessageData {
  collapseKey: string;
  data: {
    notifee: string;
  };
  from: string;
  messageId: string;
  notification: {
    android: any;
    body: string;
    title: string;
  };
  sentTime: number;
  ttl: number;
}

export interface NotificationData<T> {
  title: string;
  body: string;
  type: 'call' | 'notification' | 'chat';
  data: T;
}

export interface Data {
  channelName: string;
  type: string;
  from: string;
  to: string;
  uid: number;
  senderProfile: SenderProfile;
}

export interface SenderProfile {
  _id: string;
  fullName: string;
  userId: string;
  avatar: string;
  role: string;
}

async function onMessageReceived(message: MessageData) {
  console.log('message', message);

  const notification = (
    message?.data?.notifee ? JSON.parse(message?.data?.notifee) : {}
  ) as NotificationData<Data>;

  const data = notification?.data ? notification?.data : {};

  // call
  if (notification?.type === 'call') {
    await notifee.createChannel({
      id: 'call',
      name: 'Incoming',
      sound: 'default',
      importance: AndroidImportance.HIGH,
    });
    await notifee.displayNotification({
      title: notification?.title,
      body: notification?.body,
      subtitle: 'Call',

      android: {
        channelId: 'call',
        pressAction: {
          id: 'call',
          launchActivity: 'com.ppfitness.app.MainActivity',
        },
        category: AndroidCategory.CALL,
        // fullScreenAction: {
        //   // For custom component:
        //   id: 'call',
        //   // mainComponent: <CustomCallComponent/>,
        //   launchActivity: 'com.ppfitness.app.MainActivity',

        // },
        // asForegroundService: true,
        timestamp: Date.now(),
        // showTimestamp: true,
        // showChronometer: true,
        // ongoing: true,
        autoCancel: false,
        actions: [
          {
            title: 'Accept',
            pressAction: {
              id: 'Accept',
            },
          },
          {
            title: 'Decline',
            pressAction: {
              id: 'Decline',
            },
          },
        ],
      },
      ios: {
        foregroundPresentationOptions: {
          badge: true,
          sound: true,
          banner: true,
          list: true,
        },
      },
      data: data,
    });
  } else if (notification?.type === 'chat') {
    await notifee.createChannel({
      id: 'Chat',
      name: 'Chat Message',
      lights: true,
    });

    const androidStyle: any = {};
    await notifee.displayNotification({
      title: notification?.title,
      body: notification?.body,

      android: {
        channelId: 'call',
        pressAction: {
          id: 'call',
          launchActivity: 'com.ppfitness.app.MainActivity',
        },

        ...androidStyle,
      },
      ios: {
        foregroundPresentationOptions: {
          badge: true,
          sound: true,
          banner: true,
          list: true,
        },
      },
      data: data,
    });
  } else if (notification?.type === 'notification') {
    await notifee.createChannel({
      id: 'notification',
      name: 'Notification',
      lights: true,
    });
    const androidStyle: any = {};
    await notifee.displayNotification({
      title: notification?.title,
      body: notification?.body,

      android: {
        channelId: 'notification',
        pressAction: {
          id: 'default',
          launchActivity: 'com.ppfitness.app.MainActivity',
        },
        ...androidStyle,
      },
      ios: {
        foregroundPresentationOptions: {
          badge: true,
          sound: true,
          banner: true,
          list: true,
        },
      },
      data: data,
    });
  } else {
    await notifee.createChannel({
      id: 'default',
      name: 'Notification',
      lights: true,
      sound: 'default',
    });
    const androidStyle: any = {};
    await notifee.displayNotification({
      title: message?.notification.title,
      body: message?.notification.body,

      android: {
        channelId: 'default',
        ...androidStyle,
      },
      ios: {
        foregroundPresentationOptions: {
          badge: true,
          sound: true,
          banner: true,
          list: true,
        },
      },
      data: data,
    });
  }
}

export default onMessageReceived;
