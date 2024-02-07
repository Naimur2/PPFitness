import notifee, {
  AndroidCategory,
  AndroidImportance,
  EventDetail,
  EventType,
} from '@notifee/react-native';
import {Linking} from 'react-native';
import {ChannelIds, PressActionIds} from './notifeeHandler';
import {nanoid} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '@store/index';
import {callApiSlice} from '@store/apis/call';

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
  const {notification, pressAction, channel} = detail;

  if (type === EventType.ACTION_PRESS) {
    const {data, id} = notification || {};
    const {channelName, uid, senderProfile, token} =
      data as PropsData<PropsSendProfile>;
    //  Call
    if (channel?.id === ChannelIds.CALL) {
      if (pressAction?.id === PressActionIds.ACCEPT) {
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
            name: 'Ongoing Call',
            importance: AndroidImportance.HIGH,
          });
          const id = nanoid();
          await AsyncStorage.setItem('ongoingCall', id);
          await notifee.displayNotification({
            id,
            title: 'Ongoing Call',
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
      } else if (pressAction?.id === PressActionIds.DECLINE) {
        // Handle Decline action
        await store.dispatch(
          callApiSlice.endpoints.declineCall.initiate({
            channelName,
            type: 'decline',
          }),
        );
        if (id) {
          notifee.cancelNotification(id);
        }
      }
    }
    if (channel?.id === ChannelIds.CHAT) {
      Linking.openURL(`ppfitness://chat`);
    }
  }
}

export default handleNotification;
