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
import {AddIcon, ArrowDownIcon, Support} from '@assets/icons';
import {fontSizes} from '@theme/typography';
import {
  useGetAllProgramQuery,
  useGetProgramScheduleQuery,
} from '@store/apis/program';
import AddWorkout from 'src/actionSheets/AddWorkout';
import AddSet from 'src/actionSheets/AddSet';
import {useSelector} from 'react-redux';
import {selectAccessToken, selectUser} from '@store/features/authSlice';
import {Image} from 'react-native';
import useNavigate from '@hooks/useNavigate';
import {GetV1ProgramScheduleSuccessfulResponse} from '@store/schema';
import {SkeletonsProgramList} from 'src/components/skeletons';
import NewExercise from 'src/actionSheets/NewExercise';

const tabItems = [
  {
    label: 'Warm-up',
    icon: require('../../../assets/images/exercise.png'),
    type: 'warmup',
  },
  {
    label: 'Bench Press',
    icon: require('../../../assets/images/dumble-blue.png'),
    type: 'benchpress',
  },
  {
    label: 'Workout',
    icon: require('../../../assets/images/dumble-red.png'),
    type: 'workout',
  },
  {
    label: 'Circuit',
    type: 'circuit',
    icon: require('../../../assets/images/circle.png'),
  },
];

export default function ProgramTab() {
  const [isAddWorkout, setIsAddWorkout] = React.useState(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelectedProg, setSelectedProg] =
    React.useState<GetV1ProgramScheduleSuccessfulResponse['data']['data'][0]>();

  // Hooks
  const navigate = useNavigate();

  // APIS
  const {data, isLoading, error} = useGetProgramScheduleQuery();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
        bgColor: '#F8F8F8',
      }}>
      <HStack
        w="100%"
        bg="white"
        px={4}
        py={4}
        rounded="xl"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        onPress={() => console.log('Pressed')}
        _pressed={{bg: 'gray.100'}}>
        <Pressable>
          <ArrowDownIcon style={{transform: [{rotate: '90deg'}]}} />
        </Pressable>

        <Text
          fontSize={fontSizes.xs}
          color="#1A1929"
          style={{fontWeight: '600'}}>
          Monday - February 28, 23
        </Text>

        <Pressable>
          <ArrowDownIcon style={{transform: [{rotate: '-90deg'}]}} />
        </Pressable>
      </HStack>
      {isLoading ? (
        <SkeletonsProgramList />
      ) : (
        <>
          {data?.data?.data?.map((item, index) => {
            return (
              <VStack>
                <Text fontWeight={700} fontSize={fontSizes.md}>
                  {item?.programId?.name}
                </Text>

                {item?.workouts?.map(work => {
                  const propsData = {
                    exerciseId: work?.exerciseId,
                    programId: item?.programId,
                    notes: [work?.notes],
                    sets: work?.sets,
                    type: 'workout',
                    dateTime: {
                      day: item?.day,
                      week: item?.week,
                      date: item?.date,
                    },
                    assignedTo: item?.assignedTo,
                  };

                  const handelNavigate = () => {
                    if (work?.type == 'circuit') {
                      navigate('CirCuit', {
                        item: propsData,
                      });
                    } else if (work?.type == 'warmup') {
                      navigate('Warmup', {
                        item: propsData,
                      });
                    } else if (work?.type == 'workout') {
                      navigate('WorkoutAddSet', work);
                    }
                  };
                  const imageUri = tabItems?.find(
                    v =>
                      v?.type?.toLocaleLowerCase() ==
                      work?.type?.toLocaleLowerCase(),
                  )?.icon;
                  console.log('work?.type', work?.type);

                  return (
                    <Pressable onPress={handelNavigate}>
                      <HStack
                        justifyContent={'space-between'}
                        bg="white"
                        px={2}
                        py={2}>
                        <VStack width={'15%'}>
                          <Box>
                            <Image
                              source={imageUri}
                              style={{
                                width: 50,
                                height: 50,
                              }}
                            />

                            {/* {work?.sets?.length > 0 ? (
                              <Box
                                bg={'#353340'}
                                rounded="full"
                                h={6}
                                w={6}
                                position="absolute"
                                right={-5}
                                top={-5}
                                justifyContent="center"
                                alignItems="center">
                                <Text
                                  fontSize={fontSizes?.['2xs']}
                                  // color={item?.category?.textColor}
                                >
                                  {work?.sets?.[0]?.setNumber}
                                </Text>
                              </Box>
                            ) : null} */}
                          </Box>
                        </VStack>
                        <VStack width={'80%'} space={2}>
                          <HStack
                            space={4}
                            justifyContent={'space-between'}
                            alignItems={'center'}>
                            <Text fontWeight={700} fontSize={fontSizes.xs}>
                              {work?.type == 'circuit'
                                ? 'Circuit'
                                : work?.exerciseId?.name}
                            </Text>
                            {work?.sets?.length > 0 ? (
                              <Text
                                fontSize={fontSizes['2xs']}
                                bg={'#C7B4A0'}
                                px={4}
                                py={1}
                                fontWeight={600}
                                rounded="xl">
                                {work?.sets?.[0]?.setNumber}
                                {' x '}
                                {work?.sets?.[0]?.reps}
                              </Text>
                            ) : null}
                          </HStack>
                          <Text
                            fontSize={fontSizes['3xs']}
                            noOfLines={2}
                            color={'#7D7C81'}>
                            {work?.type == 'circuit'
                              ? work?.circuit
                              : work?.exerciseId?.instruction}
                          </Text>
                        </VStack>
                      </HStack>
                    </Pressable>
                  );
                })}
                {/* ss */}
                <VStack space={4} mt={5}>
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
                    onPress={() => {
                      setSelectedProg(item);
                      setIsOpen(true);
                    }}>
                    <AddIcon />
                    <Text color="primary.100" fontSize="sm" fontWeight={700}>
                      Add Workout
                    </Text>
                  </Pressable>

                  <Button
                    w="full"
                    bg={'#68696B'}
                    rounded={8}
                    py={3}
                    _text={{color: 'white', fontWeight: 700}}
                    _pressed={{bg: '#68696B90'}}>
                    Complete Workout
                  </Button>
                </VStack>
              </VStack>
            );
          })}
        </>
      )}
      {/* Modal */}
      <AddWorkout
        isOpen={isOpen}
        program={isSelectedProg}
        onClose={() => {
          setIsOpen(prv => !prv);
        }}
        onOpenExercise={() => {
          setIsAddWorkout(prv => !prv);
          setIsOpen(prv => !prv);
        }}
      />
      <NewExercise
        isOpen={isAddWorkout}
        onClose={() => {
          setIsAddWorkout(prv => !prv);
        }}
      />
    </ScrollView>
  );
}
