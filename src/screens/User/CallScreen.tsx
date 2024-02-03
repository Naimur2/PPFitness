import React, {useCallback, useEffect, useState} from 'react';
import {
  Box,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import {useGetChatByIdQuery, useSendMessageMutation} from '@store/apis/chat';
import {useSelector} from 'react-redux';
import {selectUser} from '@store/features/authSlice';
import {useGetSingleProfileQuery} from '@store/apis/userProfile';
import {Image, StyleSheet} from 'react-native';
import LazyImage from 'src/components/LazyImage';
import Header from 'src/components/headers/Header';
import useNavigate from '@hooks/useNavigate';
import {useNavigation} from '@react-navigation/native';
import OnCalling from 'src/actionSheets/onCalling';
const adminHelpImage = require('@assets/images/admin-help.png');
const adminHelpImageUri = Image.resolveAssetSource(adminHelpImage)?.uri;

export default function CallScreen() {
  // state
  const [messages, setMessages] = useState([]);
  const [onCallOpen, setOnCallOpen] = useState(false);
  // hooks
  const navigate = useNavigation();
  const authUser = useSelector(selectUser);
  // console.log('authUser', authUser);

  // apis
  const [sendMessage, {}] = useSendMessageMutation();
  const {data} = useGetChatByIdQuery(authUser?._id);
  const {data: profile} = useGetSingleProfileQuery();

  useEffect(() => {
    if (data?.data && profile) {
      const newData = data?.data?.data?.map(mes => {
        return {
          _id: mes?._id,
          text: mes?.text,
          user: {
            _id: mes?.sender,
            avatar:
              mes?.sender === profile?.data?.data?.userId?._id
                ? profile?.data?.data?.avatar
                : adminHelpImageUri,
          },
        };
      });
      setMessages(newData);
    }
  }, [data?.data, profile]);

  //
  const onSend = useCallback(async (messages = []) => {
    //
    try {
      const res = await sendMessage({
        message: messages?.[0]?.text,
        createdAt: messages?.[0]?.createdAt,
        updatedAt: messages?.[0]?.updatedAt,
      }).unwrap();
      console.log('res', res);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  //  MessageContainer
  const MessageContainer = props => {
    const position = props?.position;
    return (
      <>
        <HStack
          py={1}
          px={4}
          mr={position === 'left' ? 'auto' : undefined}
          justifyContent={position === 'right' ? 'flex-end' : 'flex-start'}
          flexDirection={position === 'right' ? 'row' : 'row-reverse'}
          space={4}>
          <Box maxW={'70%'} bg="gray.500" p={2} borderRadius={5}>
            <Text color={'white'} fontWeight={'500'} fontSize={'md'}>
              {props.currentMessage.text} g akhjs dajhd as daj dha sd jas djahs
              dajsbv
            </Text>
          </Box>
          <LazyImage
            source={{
              uri: props?.currentMessage?.user?.avatar,
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 5,
            }}
          />
        </HStack>
      </>
    );
  };
  // call

  const handelAudioCall = () => {
    navigate.navigate('AudioCall');
    
  };
  const handelVideoCall = () => {
    navigate.navigate('AudioCall');
  };

  return (
    <>
      <Header
        title="Message"
        onPress={handelAudioCall}
        onRightPress={handelVideoCall}
        iconRightType="call"
      />

      {/*  chat */}
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: profile?.data?.data?.userId?._id,
        }}
        renderMessage={props => <MessageContainer {...props} />}
      />
    </>
  );
}
