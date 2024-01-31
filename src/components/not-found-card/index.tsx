import React from 'react';
import {VStack, Text, NativeBaseProviderProps} from 'native-base';
import {fontSizes} from '@theme/typography';

type Props = {
  title: string;
} & React.ComponentProps<typeof VStack>;

export default function NotFoundCard({title, ...props}: Props) {
  return (
    <VStack
      borderWidth={1}
      borderRadius={8}
      minH={'20'}
      mx={4}
      justifyContent={'center'}
      borderColor={'gray.200'}
      bg={'white'}
      {...props}>
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
