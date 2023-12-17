import React from 'react';
import {
  Box,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {Edit, TotalWorkouts, WeightLoss} from '@assets/icons';
import {fontSizes} from '@theme/typography';
import WorkoutPerWeek from 'src/layouts/WorkoutPerWeek';
import DailyMacroChart from 'src/layouts/DailyMacroChart';
import BenchPress from 'src/layouts/BenchPress';
import CircumfenceMeasurement from 'src/layouts/CircumfenceMeasurement';

export default function ProfileTab() {
  return (
    <ScrollView
      _contentContainerStyle={{
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
      }}>
      <HStack space={4} py={4}>
        <Box position={'relative'}>
          <Image
            source={{
              uri: 'https://www.postendekker.nl/wp-content/uploads/2021/10/dummy-profile.jpg',
            }}
            alt="image base"
            size="56px"
            rounded="full"
            resizeMode="cover"
          />

          <Pressable position={'absolute'} bottom={0} right={0}>
            <Edit height={20} width={20} />
          </Pressable>
        </Box>
        <VStack justifyContent={'space-between'}>
          <Text color={'#58565E'} fontSize={fontSizes.xs}>
            Welcome Back
          </Text>
          <Text color={'#1A1929'} fontSize={fontSizes.md} fontWeight={700}>
            Esther Howard
          </Text>
        </VStack>
      </HStack>

      <HStack justifyContent={'space-between'}>
        <HStack
          justifyContent={'center'}
          space={4}
          alignItems={'center'}
          w="48%"
          bg="white"
          px={4}
          py={2}
          rounded={8}>
          <WeightLoss height={30} width={30} />
          <VStack justifyContent={'space-between'} alignItems={'center'}>
            <Text
              color={'#1A1929'}
              fontSize={fontSizes.md}
              fontWeight={700}
              textAlign={'center'}>
              Weight loss
            </Text>
            <Text
              color={'#58565E'}
              fontSize={fontSizes.xs}
              textAlign={'center'}>
              Goal
            </Text>
          </VStack>
        </HStack>
        <HStack
          justifyContent={'center'}
          alignItems={'center'}
          space={4}
          w="48%"
          bg="white"
          px={4}
          py={2}
          rounded={8}>
          <TotalWorkouts height={30} width={30} />
          <VStack justifyContent={'space-between'} alignItems={'center'}>
            <Text
              color={'#1A1929'}
              fontSize={fontSizes.md}
              fontWeight={700}
              textAlign={'center'}>
              234
            </Text>
            <Text
              color={'#58565E'}
              fontSize={fontSizes.xs}
              textAlign={'center'}>
              Total Workouts
            </Text>
          </VStack>
        </HStack>
      </HStack>

      <WorkoutPerWeek />
      <DailyMacroChart />
      <BenchPress />
      <CircumfenceMeasurement />
    </ScrollView>
  );
}
