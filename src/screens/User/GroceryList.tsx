import React, {useState} from 'react';
import {HStack, ScrollView, Text, VStack} from 'native-base';
import {useRoute} from '@react-navigation/native';

export default function GroceryList() {
  const groceryList = useRoute()?.params?.groceryList?.slice();

  const mappedGroceryList = groceryList?.map(gro => gro);

  const [sortBy, setSortBy] = useState('name');
  const [order, setOrder] = useState('asc');

  const getGroceryList = (sortBy: string) => {
    switch (sortBy) {
      case 'name':
        if (order === 'desc') {
          return mappedGroceryList?.sort((a, b) =>
            b.name.toLowerCase().localeCompare(a.name.toLowerCase()),
          );
        }
        return mappedGroceryList?.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        );
      case 'quantity':
        if (order === 'desc') {
          return mappedGroceryList?.sort(
            (a, b) => Number(b.quantity) - Number(a.quantity),
          );
        }
        return mappedGroceryList?.sort(
          (a, b) => Number(a.quantity) - Number(b.quantity),
        );
      case 'unit':
        if (order === 'desc') {
          return mappedGroceryList?.sort((a, b) =>
            b.unit.toLowerCase().localeCompare(a.unit.toLowerCase()),
          );
        }
        return mappedGroceryList?.sort((a, b) =>
          a.unit.toLowerCase().localeCompare(b.unit.toLowerCase()),
        );
      case 'category':
        if (order === 'desc') {
          return mappedGroceryList?.sort((a, b) =>
            b.category.toLowerCase().localeCompare(a.category.toLowerCase()),
          );
        }
        return mappedGroceryList?.sort((a, b) =>
          a.category.toLowerCase().localeCompare(b.category.toLowerCase()),
        );
      default:
        return mappedGroceryList;
    }
  };

  const sortedGroceryList = getGroceryList(sortBy);

  return (
    <VStack h={'100%'} p={4}>
      <HStack
        backgroundColor={'#EFEEF4'}
        alignItems="center"
        justifyContent={'space-around'}
        rounded={'lg'}
        py={4}
        mb={5}>
        <Text
          fontWeight={'600'}
          color={'#58565E'}
          fontSize={'sm'}
          onPress={() => {
            setSortBy('name');
            setOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
          }}>
          Ingredient
        </Text>
        <Text
          fontWeight={'600'}
          color={'#58565E'}
          fontSize={'sm'}
          onPress={() => {
            setSortBy('quantity');
            setOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
          }}>
          Amount(g)
        </Text>
        <Text
          fontWeight={'600'}
          color={'#58565E'}
          fontSize={'sm'}
          onPress={() => {
            setSortBy('unit');
            setOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
          }}>
          Unit
        </Text>
        <Text
          fontWeight={'600'}
          color={'#58565E'}
          fontSize={'sm'}
          onPress={() => {
            setSortBy('category');
            setOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
          }}>
          Category
        </Text>
      </HStack>
      {/* map */}
      <ScrollView>
        {sortedGroceryList?.map(gro => {
          return (
            <HStack
              backgroundColor={'#ffffff'}
              alignItems="center"
              justifyContent={'space-around'}
              rounded={'lg'}
              py={4}
              mb={5}>
              <Text
                fontWeight={'600'}
                color={'#58565E'}
                fontSize={'sm'}
                textAlign={'center'}
                px={1}
                width={'25%'}>
                {gro?.name}
              </Text>
              <Text
                fontWeight={'600'}
                color={'#58565E'}
                fontSize={'sm'}
                textAlign={'center'}
                px={1}
                width={'25%'}>
                {gro?.quantity}
              </Text>
              <Text
                fontWeight={'600'}
                color={'#58565E'}
                fontSize={'sm'}
                textAlign={'center'}
                px={1}
                width={'25%'}>
                {gro?.unit}
              </Text>
              <Text
                fontWeight={'600'}
                color={'#58565E'}
                fontSize={'sm'}
                textTransform={'capitalize'}
                textAlign={'center'}
                px={1}
                width={'25%'}>
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
            <Text fontWeight={'600'} color={'#58565E'} fontSize={'sm'}>
              No grocery list found for this day
            </Text>
          </HStack>
        ) : null}
      </ScrollView>
    </VStack>
  );
}
