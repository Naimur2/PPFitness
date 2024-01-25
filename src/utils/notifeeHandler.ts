import notifee from '@notifee/react-native';

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

async function onMessageReceived(message: MessageData) {
  await notifee.createChannel({
    id: 'notifications',
    name: 'PPFitness Notifications',
    lights: true,
  });

  const androidStyle: any = {};
  await notifee.displayNotification({
    title: message?.notification?.title,
    body: message?.notification?.body,
    android: {
      channelId: 'notifications',
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
    data: message?.data,
  });
}

export default onMessageReceived;
