import notifee, {
  AndroidCategory,
  AndroidImportance,
  EventDetail,
  EventType,
} from '@notifee/react-native';
import {Linking} from 'react-native';

type PropsData<T> = {
  channelName: string;
  type: string;
  from: string;
  uid: number;
  to: string;
  token: string;
  senderProfile: T;
};
type PropsSendProfile = {
  fullName: string;
  role: string;
  _id: string;
  avatar: string;
};

async function handleNotification({
  type,
  detail,
}: {
  type: EventType;
  detail: EventDetail;
}) {
  const {notification, pressAction} = detail;

  if (type === EventType.ACTION_PRESS) {
    const {data, id} = notification || {};
    const {channelName, uid, senderProfile, token} =
      data as PropsData<PropsSendProfile>;
    //  Call
    if (pressAction?.id === 'Accept') {
      // Handle Accept action
      if (channelName && token && uid) {
        console.log(
          'url',
          `channelName=>${channelName}\\\ token=>    ${token}  \\\\ uid =>${uid}`,
        );
        // 'call/:channelName/:token/:uid'
        Linking.openURL(`ppfitness://call/${channelName}/${token}/${uid}`);
        if (id) {
          notifee.cancelNotification(id);
        }
        // set new notification
        await notifee.createChannel({
          id: 'ongoing',
          name: 'Running Call',
          importance: AndroidImportance.HIGH,
        });
        await notifee.displayNotification({
          title: 'Running Call',
          body: senderProfile?.fullName,
          android: {
            channelId: 'call',
            pressAction: {
              id: 'ongoing',
              launchActivity: 'com.ppfitness.app.MainActivity',
            },
            timestamp: Date.now(),
            showTimestamp: true,
            showChronometer: true,
            ongoing: true,
            autoCancel: false,
          },

          ios: {
            foregroundPresentationOptions: {
              badge: true,
              sound: true,
              banner: true,
              list: true,
            },
          },
        });
      }
    } else if (pressAction?.id === 'Decline') {
      // Handle Decline action
      if (id) {
        notifee.cancelNotification(id);
      }
    }
  }
}

export default handleNotification;
