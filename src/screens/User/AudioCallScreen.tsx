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
import { useSelector } from 'react-redux';
import { selectAccessToken } from '@store/features/authSlice';
import { useRoute } from '@react-navigation/native';

export default function AudioCallScreen() {
  // hooks
  const route = useRoute()?.params
  const navigate = useNavigate();
  const authUser = useSelector(selectAccessToken)


  //  state
  const [videoCall, setVideoCall] = useState(true);

  const props = `?to=admin&type=audio`;
  //  APIS
  const {data, isLoading , error} = useGetStartCallQuery(props);
console.log('authUser',authUser);

  //   Callbacks
  const connectionData = {
    appId: '12b44196cb9242b3ad51e03ff34da1a5',
    channel: data?.data?.data?.channelName ?? 'ss',
    token: data?.data?.data?.token,
    uid: data?.data?.data?.uId,
  };

  console.log('connectionData', error);

  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
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
    <VStack flex={1} bg={'red.100'}>
      <StatusBar
        translucent={true}
        backgroundColor={'#ff000000'}
        barStyle={'dark-content'}
      />
      <AgoraUIKit
        styleProps={style}
        connectionData={connectionData}
        rtcCallbacks={rtcCallbacks}
      />
    </VStack>
  );
}
