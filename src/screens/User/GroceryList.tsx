import React, {useState} from 'react';
import {HStack, ScrollView, Text, VStack} from 'native-base';
import {useRoute} from '@react-navigation/native';

export default function GroceryList() {
  const groceryList = useRoute()?.params?.groceryList;
  // console.log('groceryList', groceryList);

  return (
    <VStack h={'100%'} p={4}>
      <HStack
        backgroundColor={'#EFEEF4'}
        alignItems="center"
        justifyContent={'space-around'}
        rounded={'lg'}
        py={4}
        mb={5}>
        <Text fontWeight={'600'} color={'#58565E'} fontSize={'md'}>
          Ingredient
        </Text>
        <Text fontWeight={'600'} color={'#58565E'} fontSize={'md'}>
          Amount
        </Text>
        <Text fontWeight={'600'} color={'#58565E'} fontSize={'md'}>
          Unit
        </Text>
        <Text fontWeight={'600'} color={'#58565E'} fontSize={'md'}>
          Category
        </Text>
      </HStack>
      {/* map */}
      <ScrollView>
        {groceryList?.map(gro => {
          return (
            <HStack
              backgroundColor={'#ffffff'}
              alignItems="center"
              justifyContent={'space-around'}
              rounded={'lg'}
              py={4}
              mb={5}>
              <Text fontWeight={'600'} color={'#58565E'} fontSize={'md'}>
                {gro?.name}
              </Text>
              <Text fontWeight={'600'} color={'#58565E'} fontSize={'md'}>
                {gro?.quantity}
              </Text>
              <Text fontWeight={'600'} color={'#58565E'} fontSize={'md'}>
                {gro?.unit}
              </Text>
              <Text fontWeight={'600'} color={'#58565E'} fontSize={'md'}>
                {gro?.category}
              </Text>
            </HStack>
          );
        })}
        {!groceryList || groceryList?.length === 0 ? (
          <HStack
            backgroundColor={'#ffffff'}
            alignItems="center"
            justifyContent={'center'}
            rounded={'lg'}
            py={4}
            mb={5}>
            <Text fontWeight={'600'} color={'#58565E'} fontSize={'md'}>
              No grocery list found for this day
            </Text>
          </HStack>
        ) : null}
      </ScrollView>
    </VStack>
  );
}
