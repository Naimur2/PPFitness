import {Image, Text, VStack} from 'native-base';
import React from 'react';

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
      <Text fontWeight={600} fontSize="xs" color="black" textAlign="center">
        {value}
      </Text>
      <Image source={image} alt={title} height={'22px'} width={'22px'} />
      <Text fontSize="xs" color="black" textAlign="center">
        {title}
      </Text>
      
    </VStack>
  );
}
