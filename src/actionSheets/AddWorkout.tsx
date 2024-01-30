import React from 'react';
import {
  Box,
  Button,
  Center,
  CheckIcon,
  Checkbox,
  FormControl,
  HStack,
  Input,
  Modal,
  Pressable,
  Select,
  Stack,
  Text,
  VStack,
} from 'native-base';
import {fontSizes} from '@theme/typography';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useGetAllExerciseQuery} from '@store/apis/exercise';
import TableRow from 'src/components/TableRow';
import {AddIcon} from '@assets/icons';
import {useAddWorkoutMutation} from '@store/apis/workout';
import AddSet from './AddSet';
import {GetV1ProgramScheduleSuccessfulResponse} from '@store/schema';
import NewExercise from './NewExercise';
import {Keyboard} from 'react-native';

const validationSchema = Yup.object().shape({
  exerciseId: Yup.string().required('Exercise name is required'),
});

interface IProps {
  isOpen: boolean;
  program: GetV1ProgramScheduleSuccessfulResponse['data']['data'][0];
  onClose: () => void;
  onSuccess: () => void;
  onOpenExercise?: () => void;
}

export default function AddWorkout({
  isOpen,
  onClose,
  onOpenExercise,
  program,
  onSuccess,
}: IProps) {
  // state
  const [isOpenSet, setIsOpenSet] = React.useState(false);
  const [isSets, setIsSets] = React.useState([]);

  // Hooks
  const toast = useShowToastMessage();

  // APIS
  const {data} = useGetAllExerciseQuery();
  const [addWorkout, {isLoading}] = useAddWorkoutMutation();

  //  formik
  const formik = useFormik({
    initialValues: {
      note: '',
      exerciseId: '',
    },
    validationSchema,
    onSubmit: async values => {
      Keyboard.dismiss();
      const body = {
        exerciseId: values?.exerciseId,
        programId: program?.programId?._id,
        notes: [values?.note],
        sets: isSets,
        type: 'workout',
        dateTime: {
          day: program?.day,
          week: program?.week,
          date: program?.date,
        },
        assignedTo: program?.assignedTo,
      };
      try {
        const res = await addWorkout(body).unwrap();
        onClose();
        onSuccess();
        toast(res.data?.message);
      } catch (error) {
        console.log('error', error);

        toast(error?.data?.error?.message, 'error');
      }
    },
  });

  const {
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
  } = formik;
  //

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

      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content w="100%" h="100%" flex={1}>
          <KeyboardAwareScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}>
            <VStack bg={'white'} flex={1} py={4}>
              <Text
                fontSize={fontSizes.xl}
                fontWeight="bold"
                color="black"
                textAlign="center"
                py={4}>
                Add Workout
              </Text>
              {/* header  */}
              <HStack px={4} py={2} justifyContent={'space-between'}>
                <Text
                  fontSize={fontSizes.sm}
                  fontWeight="medium"
                  color="black"
                  textAlign="center">
                  Workout Name
                </Text>
                {/*  */}
                <Pressable
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
                  borderRadius={8}
                  w={'1/3'}
                  alignSelf={'center'}
                  onPress={onOpenExercise}>
                  <AddIcon tintColor={'hsl(0, 0%, 50%)'} />
                  <Text color="gray.500" fontSize="sm" fontWeight={700}>
                    New Exercise
                  </Text>
                </Pressable>
              </HStack>
              {/* content */}
              <VStack px={4} py={2} bg="white" space={4}>
                {/* Exercise Id */}
                <FormControl
                  isRequired
                  isInvalid={Boolean(errors.exerciseId && touched.exerciseId)}>
                  <Stack space={1}>
                    <Center>
                      <Box w={'full'}>
                        <Select
                          selectedValue={values?.exerciseId}
                          minWidth="200"
                          accessibilityLabel="Exercise Name"
                          placeholder="Select Exercise Name"
                          _selectedItem={{
                            bg: 'teal.600',
                            endIcon: <CheckIcon size="5" />,
                          }}
                          mt={1}
                          onValueChange={itemValue => {
                            setFieldValue('exerciseId', itemValue);
                          }}>
                          {data?.data?.data?.map(v => {
                            return (
                              <Select.Item label={v?.name} value={v?._id} />
                            );
                          })}
                        </Select>
                      </Box>
                    </Center>
                    <FormControl.ErrorMessage>
                      {touched.exerciseId && errors.exerciseId}
                    </FormControl.ErrorMessage>
                  </Stack>
                </FormControl>
                {/* Exercise Name */}
                <VStack space="4">
                  <TableRow
                    _containerStyle={{
                      bg: '#EFEEF4',
                      py: 2,
                    }}
                    _textStyle={{
                      color: '#58565E',
                      fontSize: 'sm',
                      fontWeight: 700,
                    }}
                    cols={[
                      {
                        title: 'Sets',
                        key: 'Sets',
                      },
                      {
                        title: 'Weight',
                        key: 'weight',
                      },
                      {
                        title: 'Time',
                        key: 'time',
                      },
                      {
                        title: 'Reps',
                        key: 'Reps',
                      },
                      {
                        title: 'Rest',
                        key: 'rest',
                      },
                    ]}
                  />
                  {/* content */}
                  {isSets?.map(set => {
                    return (
                      <TableRow
                        _containerStyle={{
                          bg: 'white',
                          py: 2,
                        }}
                        _textStyle={{
                          color: '#7D7C81',
                          fontSize: 'sm',
                        }}
                        cols={[
                          {
                            title: set?.setNumber,
                            key: 'Sets',
                          },
                          {
                            title: set?.weight,
                            key: 'weight',
                          },
                          {
                            title: set?.time,
                            key: 'time',
                          },
                          {
                            title: set?.reps,
                            key: 'Reps',
                          },
                          {
                            title: set?.rest,
                            key: 'rest',
                          },
                        ]}
                      />
                    );
                  })}
                </VStack>

                {/*  */}
                <Pressable
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
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

                <FormControl>
                  <Stack space={1}>
                    <FormControl.Label
                      color={'#1A1929'}
                      _text={{
                        color: 'black',
                        fontSize: fontSizes.sm,
                        fontWeight: 600,
                      }}>
                      Note
                    </FormControl.Label>
                    <Input
                      placeholder="Note"
                      fontSize={fontSizes.xs}
                      onChangeText={handleChange('note')}
                      value={values.note}
                      onBlur={handleBlur('note')}
                      numberOfLines={5}
                      multiline={true}
                      textAlignVertical="top"
                    />
                  </Stack>
                </FormControl>

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
                  // isDisabled={isLoading}
                  onPress={handleSubmit}>
                  <AddIcon />
                  <Text color="primary.100" fontSize="sm" fontWeight={700}>
                    Add To Workout
                  </Text>
                </Pressable>
              </VStack>
            </VStack>
          </KeyboardAwareScrollView>
        </Modal.Content>
      </Modal>
    </Box>
  );
}
