import { fontSizes } from '@theme/typography';
import {Image, Text, VStack} from 'native-base';
import React from 'react';
import {scale} from 'react-native-size-matters';

interface Props {
  value: string;
  image: any;
  title: string;
}

export default function DailyMacro({title, image, value}: Props) {
  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      px={2}
      py={2}
      style={{
        gap: 8,
      }}>
      <Text
        fontWeight={600}
        fontSize={fontSizes.xs}
        color="black"
        textAlign="center">
        {value}
      </Text>
      <Image source={image} alt={title} height={'22px'} width={'22px'} />
      <Text fontSize={fontSizes.xs} color="black" textAlign="center">
        {title}
      </Text>
    </VStack>
  );
}
