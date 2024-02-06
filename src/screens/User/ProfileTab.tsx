import React from 'react';
import {
  Box,
  Button,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {Edit, TotalWorkouts, WeightLoss} from '@assets/icons';
import {fontSizes} from '@theme/typography';
import WorkoutPerWeek from 'src/layouts/WorkoutPerWeek';
import DailyMacroChart from 'src/layouts/DailyMacroChart';
import CircumfenceMeasurement from 'src/layouts/CircumfenceMeasurement';
import useImageUploader from '@hooks/useImageUploader';
import {
  useGetSingleProfileQuery,
  useUpdateFileMutation,
  useUpdateProfileMutation,
} from '@store/apis/userProfile';
import createFormFile from 'src/utils/fileDetails';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {Linking} from 'react-native';
import {useGetWorkoutPerWeekQuery} from '@store/apis/workout';
import LazyImage from 'src/components/LazyImage';
import WeightChart from 'src/layouts/WeightChart';

export default function ProfileTab() {
  // Hooks
  const {handleImagePicker} = useImageUploader();
  const toast = useShowToastMessage();
  // APIS
  const [handelProfile, {}] = useUpdateProfileMutation();
  const [handelFileUpload, {}] = useUpdateFileMutation();
  const {data} = useGetSingleProfileQuery();
  const handelImage = async () => {
    try {
      const file = await handleImagePicker();
      const formData = new FormData();
      if (file?.fileName && file?.uri) {
        formData.append(
          'files',
          createFormFile(file?.uri, 'image', file?.fileName),
        );
      }
      const fileRes = await handelFileUpload(formData).unwrap();
      console.log('fileRes', JSON.stringify(fileRes));

      const res = await handelProfile({
        avatar: fileRes?.data?.data?.[0]?.url,
      }).unwrap();
      console.log('res', res);

      toast(res.data?.message);
    } catch (error) {
      toast(error?.data?.error?.message, 'error');
    }
  };
  const {data: workoutData} = useGetWorkoutPerWeekQuery();

  // TODO: Add DailyMacroChart

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
      }}>
      <HStack
        space={4}
        py={4}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <HStack space={4}>
          <Box position={'relative'}>
            <LazyImage
              source={{
                uri:
                  data?.data?.data?.avatar ??
                  'https://www.postendekker.nl/wp-content/uploads/2021/10/dummy-profile.jpg',
              }}
              alt={data?.data?.data?.fullName || 'image base'}
              style={{
                width: 56,
                height: 56,
                resizeMode: 'cover',
                borderRadius: 50,
              }}
            />
            <Pressable
              onPress={handelImage}
              position={'absolute'}
              bottom={0}
              right={0}>
              <Edit height={20} width={20} />
            </Pressable>
          </Box>
          <VStack justifyContent={'space-between'}>
            <Text color={'#58565E'} fontSize={fontSizes.xs}>
              Welcome Back
            </Text>
            <Text color={'#1A1929'} fontSize={fontSizes.md} fontWeight={700}>
              {data?.data?.data?.fullName}
            </Text>
          </VStack>
        </HStack>
        <Button
          bg={'#C7B4A0'}
          _text={{
            color: '#1A1929',
          }}
          _pressed={{
            bg: '#C7B4A0',
          }}
          px={4}
          rounded={20}
          py={'6px'}
          onPress={async () => {
            const supported = await Linking.canOpenURL(
              'https://ppfit.setmore.com',
            );
            if (supported) {
              Linking.openURL('https://ppfit.setmore.com');
            }
          }}>
          Book In
        </Button>
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
              {data?.data?.data?.goal || 'Goal'}
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
              {workoutData?.data?.data?.totalWorkouts || 0}
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
      {/* <DailyMacroChart />  */}
      {/* <BenchPress /> */}
      <WeightChart />
      <CircumfenceMeasurement />
    </ScrollView>
  );
}
