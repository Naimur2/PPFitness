import React from 'react';
import {VStack, Text} from 'native-base';
import {fontSizes} from '@theme/typography';

export default function NotFoundCard({title}: {title: string}) {
  return (
    <VStack
      borderWidth={1}
      borderRadius={8}
      minH={'20'}
      mx={4}
      justifyContent={'center'}
      borderColor={'gray.200'}
      bg={'white'}>
      <Text
        textAlign={'center'}
        fontSize={fontSizes.md}
        fontWeight={600}
        color="black">
        {title}
      </Text>
    </VStack>
  );
}
