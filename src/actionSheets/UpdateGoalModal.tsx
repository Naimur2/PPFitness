import React, {useEffect} from 'react';
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
import {CloseIcon, FileUploadIcon} from '@assets/icons';
import useImageUploader from '@hooks/useImageUploader';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {
  useGetSingleProfileQuery,
  useUpdateFileMutation,
  useUpdateProfileMutation,
} from '@store/apis/userProfile';
import createFormFile from 'src/utils/fileDetails';
import {useAddExerciseMutation} from '@store/apis/exercise';
import DropDown from 'src/components/DropDown';

type TOptions = {
  value: string;
  label: string;
};

const exerciseGoals: TOptions[] = [
  {label: 'Weight Loss', value: 'weight_loss'},
  {label: 'Endurance', value: 'endurance'},
  {label: 'Strength', value: 'strength'},
  {label: 'Flexibility', value: 'flexibility'},
  {label: 'Functional Fitness', value: 'functional_fitness'},
  {label: 'Wellness', value: 'wellness'},
  {label: 'Sport-Specific', value: 'sport_specific'},
  {label: 'Consistency', value: 'consistency'},
];

const randomColor = (i: number) => {
  if (i < colors.length) {
    return colors[i];
  }
  const index = i % colors.length;

  return colors[index];
};

const validationSchema = Yup.object().shape({
  goal: Yup.string().required('Goal is required'),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpdateGoalModal({isOpen, onClose}: IProps) {
  const toast = useShowToastMessage();
  const {data} = useGetSingleProfileQuery();

  const [updateProfile, {isLoading}] = useUpdateProfileMutation();
  //  formik
  const formik = useFormik({
    initialValues: {
      goal: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        onClose();
        const res = await updateProfile({
          goal: values.goal,
        }).unwrap();
        toast("Goal updated successfully");
      } catch (error) {
        toast(error?.data?.error?.message, 'error');
      }
    },
  });

  useEffect(() => {
    if (data) {
      formik?.setValues({
        goal: data?.data?.data?.goal || '',
      });
    }
  }, [data]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content w="90%" maxW={'500px'}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}>
          <VStack bg={'white'} py={4}>
            <Text
              fontSize={fontSizes.xl}
              fontWeight="bold"
              color="black"
              textAlign="center"
              py={4}>
              Update Goal
            </Text>

            <VStack px={4} py={2} bg="white" space={4}>
              {/* Goal Part*/}
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.goal && formik.touched.goal)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Goal
                  </FormControl.Label>
                  <Center>
                    <Box w={'full'}>
                      <DropDown
                        data={exerciseGoals}
                        label="Select Goal"
                        value={exerciseGoals?.find(
                          v => v?.label === formik?.values?.goal,
                        )}
                        onChange={itemValue => {
                          formik?.setFieldValue('goal', itemValue?.label);
                        }}
                        width={'100%'}
                        rounded={5}
                        borderWidth={1}
                        py={'10px'}
                        borderColor={'#F8F8F8'}
                        backgroundColor={'#F8F8F8'}
                      />
                    </Box>
                  </Center>
                  <FormControl.ErrorMessage>
                    {formik.errors.goal}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>

              <HStack
                justifyContent={'space-between'}
              >
                <Button
                  w="full"
                  bg={'transparent'}
                  borderColor={'primary.100'}
                  borderWidth={1}
                  rounded={8}
                  onPress={() => {
                    onClose?.();
                  }}
                  isLoading={isLoading}
                  py={3}
                  mt={4}
                  _text={{color: 'primary.100', fontWeight: 700}}
                  _pressed={{bg: '#68696B90'}}
                  width={'48%'}>
                  Cancel
                </Button>
                <Button
                  w="full"
                  bg={'primary.100'}
                  rounded={8}
                  onPress={() => {
                    formik?.handleSubmit();
                  }}
                  isLoading={isLoading}
                  py={3}
                  mt={4}
                  width={'48%'}
                  _text={{color: 'white', fontWeight: 700}}
                  _pressed={{bg: '#68696B90'}}>
                  Update Goal
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </KeyboardAwareScrollView>
      </Modal.Content>
    </Modal>
  );
}
