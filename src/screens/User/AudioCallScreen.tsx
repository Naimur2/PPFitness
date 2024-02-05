import React, {useState} from 'react';
import useNavigate from '@hooks/useNavigate';
import {StatusBar} from 'react-native';
import {VStack} from 'native-base';
import AgoraUIKit, {
  ConnectionData,
  rtcCallbacks,
  StylePropInterface,
} from 'agora-rn-uikit';
import {useGetStartCallQuery} from '@store/apis/call';
import {useSelector} from 'react-redux';
import {selectAccessToken, selectUser} from '@store/features/authSlice';
import {useRoute} from '@react-navigation/native';
import {CallbacksInterface} from 'agora-rn-uikit/src/Contexts/PropsContext';
import notifee from '@notifee/react-native';
type PropsRoute = {
  channelName: string;
  token: string;
  uid: string;
};

export default function AudioCallScreen() {
  // hooks
  const route = useRoute()?.params as PropsRoute;
  const navigate = useNavigate();
  const authUser = useSelector(selectUser);

  //  state
  const [videoCall, setVideoCall] = useState(true);

  //  APIS
  const props = `?to=admin&type=audio`;
  const {data, isLoading, error} = useGetStartCallQuery(props);

  //   Callbacks
  const connectionData = {
    appId: '12b44196cb9242b3ad51e03ff34da1a5',
    channel: route?.channelName || data?.data?.data?.channelName,
    token: route?.token || data?.data?.data?.token,
    uid: Number(route?.uid) || data?.data?.data?.uId,
  } as any;

  const rtcCallbacks: Partial<CallbacksInterface> = {
    EndCall: () => {
      setVideoCall(false);
      navigate("Call");
      notifee.cancelNotification('ongoing');
    },
  };

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
      {/* <StatusBar
        translucent={true}
        backgroundColor={'#ff000000'}
        barStyle={'dark-content'}
      /> */}
      {isLoading ? (
        <></>
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
