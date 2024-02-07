import { AGORA_APP_ID, BASE_URL } from '@env';
import notifee from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetStartCallQuery } from '@store/apis/call';
import { selectUser } from '@store/features/authSlice';
import AgoraUIKit, {
  StylePropInterface
} from 'agora-rn-uikit';
import { CallbacksInterface } from 'agora-rn-uikit/src/Contexts/PropsContext';
import { Spinner, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
type PropsRoute = {
  channelName: string;
  token: string;
  uid: string;
};

export default function AudioCallScreen() {
  // hooks
  const route = useRoute()?.params as PropsRoute;
  const navigation = useNavigation();
  const authUser = useSelector(selectUser);

  //  state
  const [videoCall, setVideoCall] = useState(true);

  const {data, isLoading, error} = useGetStartCallQuery({
    to: 'admin',
    type: 'video',
  });

  //   Callbacks
  const connectionData = {
    appId: AGORA_APP_ID,
    channel: route?.channelName || data?.data?.data?.channelName,
    token: route?.token || data?.data?.data?.token,
    uid: Number(route?.uid) || data?.data?.data?.uId,
  } as any;

  const rtcCallbacks: Partial<CallbacksInterface> = {
    EndCall: async () => {
      setVideoCall(false);
      navigation.replace('BottomTab');
      const id = await AsyncStorage.getItem('ongoingCall');
      if (id) {
        notifee.cancelNotification(id);
      }
    },
  };

  useEffect(() => {
    const socket = io(BASE_URL, {transports: ['websocket']});
    socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('disconnect', () => {
      console.log('disconnect');
    });
    socket.on('message', (data: any) => {
      console.log('message', data);
    });
    socket.on('error', (data: any) => {
      console.log('error', data);
    });
    socket.on('call-declined', (socketData: {channelName: string}) => {
      if (
        socketData.channelName === route?.channelName ||
        data?.data?.data?.channelName
      ) {
        navigation.replace('BottomTab');
        Alert.alert('Call declined', 'User declined the call');
      }
    });
    socket.on('call-not-responded', (socketData: {channelName: string}) => {
      if (
        socketData.channelName === route?.channelName ||
        data?.data?.data?.channelName
      ) {
        navigation.replace('BottomTab');
        Alert.alert('Not Responded', 'User did not respond to the call');
      }
    });
  }, []);

  //  style
  const style: StylePropInterface = {
    localBtnStyles: {
      muteLocalAudio: {
        backgroundColor: 'black',
        borderColor: '#ffffff',
      },
      muteLocalVideo: {
        backgroundColor: 'black',
        borderColor: '#ffffff',
      },
      switchCamera: {
        backgroundColor: 'black',
        borderColor: '#ffffff',
      },
    },
  };
  return (
    <VStack flex={1}>
      {isLoading ? (
        <VStack flex={1} justifyContent="center" alignItems="center">
          <Spinner color="primary.500" size="lg" />
        </VStack>
      ) : (
        <AgoraUIKit
          styleProps={style}
          connectionData={connectionData}
          rtcCallbacks={rtcCallbacks}
        />
      )}
    </VStack>
  );
}
