import React, {useCallback, useEffect, useState} from 'react';
import {Box, HStack, Pressable, ScrollView, Text, VStack} from 'native-base';
import {GiftedChat} from 'react-native-gifted-chat';
import {useGetChatByIdQuery, useSendMessageMutation} from '@store/apis/chat';
import {useSelector} from 'react-redux';
import {selectUser} from '@store/features/authSlice';
import {useGetSingleProfileQuery} from '@store/apis/userProfile';
import {Image} from 'react-native';
const adminHelpImage = require('@assets/images/admin-help.png');
const adminHelpImageUri = Image.resolveAssetSource(adminHelpImage)?.uri;

export default function CallScreen() {
  // state
  const [messages, setMessages] = useState([]);
  // hooks
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
      }).unwrap();
      console.log('res', res);

      // const mess = {
      //   _id: res?.data?.data,
      //   text: mes?.text,
      //   user: {
      //     _id: mes?.sender,
      //     avatar:
      //       mes?.sender === authUser?._id
      //         ? profile?.data?.data?.avatar
      //         : adminHelpImageUri,
      //   },
      // };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <ScrollView
      _contentContainerStyle={{
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
      }}>
      {/*  */}
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: profile?.data?.data?.userId?._id,
        }}
      />
    </ScrollView>
  );
}
