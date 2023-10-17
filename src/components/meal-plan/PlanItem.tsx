import React from 'react';
import {Image, Pressable, Text, VStack} from 'native-base';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface Item {
  title: string;
  image: any;
  description: string;
  id?: string;
}

interface Props {
  items: Item[];
  title: string;
}

export default function PlanItem({items, title}: Props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <VStack space="2">
      <Text fontSize="lg" fontWeight={700} color="black">
        {title}
      </Text>
      {items.map((item, index) => (
        <Pressable
          onPress={() => setChecked(prev => !prev)}
          display="flex"
          flexDirection="row"
          gap={4}
          bg="#FFFFFF"
          rounded="xl"
          p={2}
          key={item.title + index}
          position={'relative'}>
          <Image
            source={{uri: item.image}}
            h={65}
            w={70}
            alt="image base"
            rounded="lg"
          />
          <VStack justifyContent="space-between" py={2}>
            <Text fontSize="lg" fontWeight={700} color="black">
              {item.title}
            </Text>
            <Text fontSize="xs" fontWeight={600} color="gray.2">
              {item.description}
            </Text>
          </VStack>
          <BouncyCheckbox
            fillColor="#3CDB7F"
            unfillColor="#E1E0E6"
            iconStyle={{borderColor: '#FFFFFF'}}
            onPress={() => setChecked(prev => !prev)}
            isChecked={checked}
            size={20}
            style={{position: 'absolute', top: 15, right: 0}}
          />
        </Pressable>
      ))}
    </VStack>
  );
}
