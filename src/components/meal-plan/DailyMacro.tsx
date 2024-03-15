import { fontSizes } from '@theme/typography';
import { Text, VStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';

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
        gap: 4,
      }}>
      <Text
        fontWeight={600}
        fontSize={fontSizes.xs}
        color="black"
        textAlign="center">
        {value}
      </Text>
      <Image
        source={image}
        alt={title}
        style={{
          width: 30,
          height: 30,
        }}
      />
      <Text
        fontSize={fontSizes.xs}
        textTransform={'capitalize'}
        color="black"
        textAlign="center">
        {title}
      </Text>
    </VStack>
  );
}
