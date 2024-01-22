import React from 'react';
import {Factory, HStack, Text, VStack} from 'native-base';
import Video from 'react-native-video';
import {GetV1ExerciseGetIdSuccessfulResponse} from '@store/schema';

interface Props {
  data: GetV1ExerciseGetIdSuccessfulResponse['data']['data'];
}

export default function VideoDetails({data}: Props) {
  const FVideo = Factory(Video);
  //
  // console.log('data', data);

  return (
    <VStack space={8} mt={5}>
      <FVideo
        source={{
          uri: data?.video || 'https://www.youtube.com/embed/MxXHui8ozZw',
        }}
        controls={true}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 8,
          backgroundColor: 'black',
        }}
      />

      <VStack space={3} px={4}>
        <Text fontSize="lg" fontWeight="bold" color="black">
          Instructions
        </Text>

        <HStack space={2}>
          <Text color="gray.2">{data?.instruction || ''}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
