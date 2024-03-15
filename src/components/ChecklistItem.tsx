import {fontSizes} from '@theme/typography';
import {Box, HStack, Pressable, Text, VStack} from 'native-base';
import React from 'react';
import {scale} from 'react-native-size-matters';
import VectorImage from 'react-native-vector-image';

type TCheckListItem = {
  isComplete: boolean;
  onPress: () => void;
  title: string;
  subTitle: string;
};

export default function ChecklistItem({
  isComplete,
  onPress,
  subTitle,
  title,
}: TCheckListItem) {
  return (
    <Pressable onPress={onPress} isDisabled={isComplete}>
      <HStack alignItems="center" space={4} bg={'#FFFFFF'} p={2} rounded={'md'}>
        <Box bg="#F9EFDA" p="2" rounded={'md'}>
          {isComplete ? (
            <VectorImage
              source={require('@assets/svg/complete.svg')}
              style={{width: scale(24), height: scale(24)}}
            />
          ) : (
            <VectorImage
              source={require('@assets/svg/pending.svg')}
              style={{width: scale(24), height: scale(24)}}
            />
          )}
        </Box>
        <VStack>
          <Text fontWeight={700} color={'#1A1929'} fontSize={fontSizes.md}>
            {title}
          </Text>
          <Text color={'#7D7C81'} fontSize={fontSizes.sm} noOfLines={2}>
            {subTitle}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}
