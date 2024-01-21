import React from 'react';
import {Image, Pressable, Text, VStack} from 'native-base';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import VectorImage from 'react-native-vector-image';
import {PlayIcon} from '@assets/icons';

interface Item {
  _id: string;
  name: string;
  video: string;
  instruction: string;
  tags: string[];
  bodyPart: string;
  equipment: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  items: Item[];
  title: string;
  onPress?: (id: any) => void;
}

export default function ExerciseItem({items, title, onPress}: Props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <VStack space="3">
      <Text fontSize="lg" fontWeight={700} color="black">
        {title}
      </Text>
      {items.map((item, index) => (
        <Pressable
          onPress={() => onPress?.(item?._id)}
          display="flex"
          flexDirection="row"
          gap={4}
          bg="#FFFFFF"
          rounded="xl"
          p={2}
          key={item.name + index}
          position={'relative'}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
            }}
            h={65}
            w={70}
            alt="image base"
            rounded="lg"
          />
          <VStack justifyContent="space-between" py={2}>
            <Text fontSize="lg" fontWeight={700} color="black">
              {item.name}
            </Text>
            <Text fontSize="xs" maxW={'5/6'} fontWeight={600} color="gray.2">
              {item.instruction}
            </Text>
          </VStack>

          <PlayIcon style={{position: 'absolute', top: 15, right: 10}} />
        </Pressable>
      ))}
    </VStack>
  );
}
