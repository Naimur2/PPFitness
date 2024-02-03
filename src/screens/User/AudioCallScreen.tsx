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

export default function AudioCallScreen() {
  // hooks
  const route = useRoute()?.params;
  const navigate = useNavigate();
  const authUser = useSelector(selectUser);

  //  state
  const [videoCall, setVideoCall] = useState(true);

  const props = `?to=admin&type=audio`;
  //  APIS
  console.log('authUser', authUser);
  const {data, isLoading, error} = useGetStartCallQuery(props);

  //   Callbacks
  const connectionData = {
    appId: '12b44196cb9242b3ad51e03ff34da1a5',
    channel: data?.data?.data?.channelName,
    token: data?.data?.data?.token,
    uid: data?.data?.data?.uId, // must be a number
  };

  const rtcCallbacks: Partial<CallbacksInterface> = {
    EndCall: () => {
      setVideoCall(false);
      navigate(undefined, undefined, 'goBack');
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
