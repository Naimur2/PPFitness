import React from 'react';
import {AddIcon, ClockIcon, NoteIcon} from '@assets/icons';
import {useRoute} from '@react-navigation/native';
import {GetV1ProgramScheduleSuccessfulResponse} from '@store/schema';
import {fontSizes} from '@theme/typography';
import {
  Center,
  ScrollView,
  Text,
  VStack,
  Box,
  HStack,
  Pressable,
  Button,
} from 'native-base';
import TableRow from 'src/components/TableRow';
import Header from 'src/components/headers/Header';
import AddSet from 'src/actionSheets/AddSet';

export default function WorkoutAddSet() {
  const route = useRoute()
    .params as GetV1ProgramScheduleSuccessfulResponse['data']['data'][0]['workouts'][0];
  // State
  const [isOpenSet, setIsOpenSet] = React.useState(false);
  const [isSets, setIsSets] = React.useState([...route?.sets]);
  return (
    <Box>
      <AddSet
        isOpen={isOpenSet}
        onClose={() => {
          setIsOpenSet(prv => !prv);
        }}
        onSetValue={item => {
          setIsSets(prv => [...prv, item]);
        }}
      />
      <Header title={route?.exerciseId?.name} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
          bg: 'bg',
          px: 4,
          flexGrow: 1,
          pt: 4,
          pb: '48',
        }}>
        <VStack h={'full'} bg={'gray.100'}>
          <HStack justifyContent={'space-between'}>
            <Box w={'30%'}>
              <Text fontWeight={700} fontSize={fontSizes.sm}>
                Max 1RM
              </Text>
            </Box>
            <HStack w={'30%'} justifyContent={'center'}>
              <ClockIcon width={25} height={25} tintColor={'#C7B4A0'} />
            </HStack>
            <HStack w={'30%'} justifyContent={'flex-end'}>
              <Text fontWeight={700} fontSize={fontSizes.sm}>
                eee
              </Text>
            </HStack>
          </HStack>

          {isSets?.map((set, index) => {
            return (
              <VStack pb={2} space={3} mt={5}>
                {/* head */}
                <HStack
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  rounded={'lg'}
                  p={3}
                  bg={'#EFEEF4'}>
                  <Text fontWeight={700}>Reps</Text>
                  <Text
                    fontWeight={800}
                    color={'#C7B4A0'}
                    fontSize={fontSizes.sm}>
                    SET {index + 1}
                  </Text>
                  <Text fontWeight={700}>Weight</Text>
                </HStack>
                {/* content */}
                <HStack
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  rounded={'lg'}
                  p={2}
                  py={2}
                  bg={'#ffffff'}>
                  <Text fontWeight={400} color={'#7D7C81'}>
                    {set?.reps}
                  </Text>
                  <Text
                    fontWeight={400}
                    color={'#7D7C81'}
                    rounded={'md'}
                    px={4}
                    py={1}
                    bg={'#E1E0E6'}>
                    {set?.setNumber}
                  </Text>
                  <Text fontWeight={400} color={'#7D7C81'}>
                    {set?.weight}
                  </Text>
                </HStack>
                {/* Footer */}
                <HStack
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  rounded={'lg'}
                  p={2}
                  py={3}
                  bg={'#F0F3FA'}>
                  <Text fontWeight={400} color={'#7D7C81'}>
                    Rest = {set?.rest}
                  </Text>
                </HStack>
              </VStack>
            );
          })}

          {/*  */}
          <Pressable
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
            mt={5}
            borderRadius={8}
            alignSelf={'center'}
            w={'1/2'}
            bg="#C7B4A0"
            py={3}
            onPress={() => setIsOpenSet(prv => !prv)}>
            <AddIcon tintColor={'#fff'} />
            <Text color="white" fontSize="sm" fontWeight={700}>
              Add Set
            </Text>
          </Pressable>

          {/* nots */}
          <Text
            fontWeight={400}
            bg={'white'}
            rounded={'md'}
            mt={5}
            p={2}
            color={'#7D7C81'}>
            {route?.exerciseId?.instruction}
          </Text>

          {/* buttons */}
          <VStack space={4} mt={5}>
            <Button
              w="full"
              bg={'#68696B'}
              rounded={8}
              py={3}
              _text={{color: 'white', fontWeight: 700}}
              _pressed={{bg: '#68696B90'}}>
              Complete
            </Button>

            <Pressable
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
              borderRadius={8}
              borderWidth={1}
              borderColor="primary.100"
              bg="white"
              py={2}
              //   onPress={() => setIsOpen(true)}
            >
              <AddIcon />
              <Text color="primary.100" fontSize="sm" fontWeight={700}>
                Add Notes
              </Text>
            </Pressable>
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  );
}
