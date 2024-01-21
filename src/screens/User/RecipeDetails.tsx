import React, {useState} from 'react';
import {
  Box,
  Button,
  HStack,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import {useRoute} from '@react-navigation/native';
import Header from 'src/components/headers/Header';
import {useGetSingleRecipeByIdQuery} from '@store/apis/recipe';
import {Image} from 'react-native';

export default function RecipeDetails() {
  const [switchButton, setSwitchButton] = useState<boolean>(true);
  const recipeId = useRoute()?.params as any;
  const {data} = useGetSingleRecipeByIdQuery(recipeId);
  // Hooks
  //   console.log('data', JSON.stringify(data?.data?.data));

  return (
    <Box>
      <Header title={data?.data?.data?.name} />;
      <VStack h={'100%'} p={4}>
        <HStack bg={'white'} p={2} rounded={'sm'}>
          <Button
            w="2/4"
            bg={switchButton ? 'secondary.100' : 'white'}
            rounded={8}
            py={3}
            _text={{color: 'black', fontWeight: 700}}
            _pressed={{bg: 'white'}}
            onPress={() => setSwitchButton(prv => !prv)}
            // isLoading={isLoading}
          >
            Ingredients
          </Button>
          <Button
            w="2/4"
            bg={!switchButton ? 'secondary.100' : 'white'}
            rounded={8}
            py={3}
            _text={{color: 'black', fontWeight: 700}}
            _pressed={{bg: 'white'}}
            onPress={() => setSwitchButton(prv => !prv)}>
            Methods
          </Button>
        </HStack>
        <HStack alignItems="center">
          <Image
            source={{uri: data?.data?.data?.photo}}
            style={{
              width: '100%',
              height: 170,
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </HStack>
        {switchButton ? (
          <VStack>
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
                Amount/Unit
              </Text>
            </HStack>
            <ScrollView showsVerticalScrollIndicator={false}>
              {data?.data?.data?.ingredients?.map(ing => {
                return (
                  <HStack
                    backgroundColor={'#ffffff'}
                    alignItems="center"
                    justifyContent={'space-around'}
                    rounded={'lg'}
                    py={4}>
                    <Text>{ing?.name}</Text>
                    <Text>
                      {ing?.unit?.quantity} {ing?.unit?.unit}
                    </Text>
                  </HStack>
                );
              })}
            </ScrollView>
          </VStack>
        ) : (
          <VStack>
            <Text color={'#7D7C81'} fontSize={'md'}>
              {data?.data?.data?.method}
            </Text>
          </VStack>
        )}
      </VStack>
    </Box>
  );
}
