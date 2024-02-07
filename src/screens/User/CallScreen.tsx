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
import {Bubble, GiftedChat, IMessage, Send} from 'react-native-gifted-chat';
import {
  chatApiSlice,
  useGetChatByIdQuery,
  useSendMessageMutation,
} from '@store/apis/chat';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '@store/features/authSlice';
import {useGetSingleProfileQuery} from '@store/apis/userProfile';
import {Image, StyleSheet} from 'react-native';
import LazyImage from 'src/components/LazyImage';
import Header from 'src/components/headers/Header';
import useNavigate from '@hooks/useNavigate';
import {useNavigation} from '@react-navigation/native';
import OnCalling from 'src/actionSheets/onCalling';
import {fontConfig} from '@theme/fontConfig';
const adminHelpImage = require('@assets/images/admin-help.png');
const adminHelpImageUri = Image.resolveAssetSource(adminHelpImage)?.uri;

const renderBubble = props => (
  <Bubble
    {...props}
    wrapperStyle={{
      left: {
        backgroundColor: '#000',
      },
      right: {
        backgroundColor: '#fff',
      },
    }}
    textProps={{
      style: {
        color: '#000',
      },
    }}
    textStyle={{
      left: {
        color: '#fff',
      },
      right: {
        color: '#000',
      },
    }}
    style={{
      width: '100%',
    }}
  />
);

export default function CallScreen() {
  // hooks
  const navigate = useNavigation();
  const authUser = useSelector(selectUser);
  // console.log('authUser', authUser);

  const dispatch = useDispatch();

  // apis
  const [sendMessage, {}] = useSendMessageMutation();
  const {data} = useGetChatByIdQuery(authUser?._id);
  const {data: profile} = useGetSingleProfileQuery();

  const messageData: IMessage[] = React.useMemo(() => {
    if (data?.data?.data && profile) {
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

      return newData;
    }

    return [];
  }, [data?.data, profile]);

  //
  const onSend = useCallback(async (messages: IMessage[] = []) => {
    //
    try {
      const res = await sendMessage({
        message: messages?.[0]?.text,
        id: authUser?._id,
      }).unwrap();
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
          mb={1}
          mr={position === 'left' ? 'auto' : undefined}
          justifyContent={position === 'right' ? 'flex-end' : 'flex-start'}
          flexDirection={position === 'right' ? 'row' : 'row-reverse'}
          space={4}>
          <Box maxW={'70%'} bg="gray.500" p={2} borderRadius={5}>
            <Text color={'white'} fontWeight={'500'} fontSize={'md'}>
              {props.currentMessage.text}
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

  const handelAudioCall = () => {
    navigate.navigate('AudioCall');
  };
  const handelVideoCall = () => {
    navigate.navigate('AudioCall');
  };

  const onLoadMore = async () => {
    if (
      data?.data?.meta.page &&
      data?.data?.meta.page < data?.data?.meta.totalPages
    ) {
      try {
        const reducer = chatApiSlice.endpoints.getMoreChatById.initiate({
          id: authUser?._id,
          page: data?.data?.meta.page + 1,
          limit: data?.data?.meta.limit,
        });
        const res = await dispatch(reducer as any).unwrap();
      } catch (error) {
        console.log('error', error);
      }
    }
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
        messages={messageData}
        onSend={messages => onSend(messages)}
        user={{
          _id: profile?.data?.data?.userId?._id,
        }}
        renderMessage={props => <MessageContainer {...props} />}
        textInputProps={{
          placeholder: 'Type a message...',
          style: {
            color: 'black',
            backgroundColor: 'white',
            fontSize: 16,
            fontFamily: fontConfig.Outfit[400].normal,
            width: '85%',
            marginLeft: 10,
          },
        }}
        listViewProps={{
          paddingVertical: 16,
          onEndReached: onLoadMore,
          onEndReachedThreshold: 0.5,
        }}
        keyboardShouldPersistTaps={'handled'}
        renderSend={props => {
          return (
            <Send
              {...props}
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginRight: 10,
                marginBottom: 5,
              }}>
              <Box
                bg="#68696B"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                px={2}
                py={2}
                borderRadius={5}>
                <Text color={'white'}>Send</Text>
              </Box>
            </Send>
          );
        }}
        renderLoading={() => {
          return (
            <VStack
              space={4}
              alignItems={'center'}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {
                    rotate: '180deg',
                  },
                ],
              }}>
              <Text color={'gray.500'} fontSize={'lg'}>
                Loading...
              </Text>
            </VStack>
          );
        }}
        renderBubble={renderBubble}
        renderChatEmpty={() => {
          return (
            <VStack
              space={4}
              alignItems={'center'}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {
                    rotate: '180deg',
                  },
                ],
              }}>
              <Text color={'gray.500'} fontSize={'lg'}>
                No message yet
              </Text>
            </VStack>
          );
        }}
      />
    </>
  );
}
