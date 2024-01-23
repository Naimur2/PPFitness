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
import {CloseIcon, FileUploadIcon} from '@assets/icons';
import useImageUploader from '@hooks/useImageUploader';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useUpdateFileMutation} from '@store/apis/userProfile';
import createFormFile from 'src/utils/fileDetails';
import {useAddExerciseMutation} from '@store/apis/exercise';

const validationSchema = Yup.object().shape({
  reps: Yup.string().required('Reps is required'),
  weight: Yup.string().required('Weight is required'),
  rest: Yup.string().required('Rest is required'),
  time: Yup.string().required('Time is required'),
  setNumber: Yup.string().required('Set number is required'),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSetValue: (props: {
    reps: string;
    weight: string;
    rest: string;
    time: string;
    setNumber: string;
  }) => void;
}

export default function AddSet({isOpen, onClose, onSetValue}: IProps) {
  //  formik
  const formik = useFormik({
    initialValues: {
      reps: '',
      weight: '',
      rest: '',
      time: '',
      setNumber: '',
    },
    validationSchema,
    onSubmit: async values => {
      onSetValue(values);
      onClose();
    },
  });

  return (
    <Modal isOpen={isOpen} zIndex={99} onClose={onClose}>
      <Modal.Content w="100%" h="100%" flex={1} bg="gray.400">
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
              Add Set
            </Text>

            <VStack px={4} py={2} bg="white" space={4}>
              {/*  Note */}
              <FormControl
                isRequired
                isInvalid={Boolean(
                  formik.errors.setNumber && formik.touched.setNumber,
                )}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Set Number
                  </FormControl.Label>
                  <Input
                    keyboardType="numeric"
                    placeholder="Set number"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('setNumber')}
                    value={formik.values.setNumber}
                    onBlur={formik.handleBlur('setNumber')}
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.setNumber}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.reps && formik.touched.reps)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Reps
                  </FormControl.Label>
                  <Input
                    keyboardType="numeric"
                    placeholder="reps"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('reps')}
                    value={formik.values.reps}
                    onBlur={formik.handleBlur('reps')}
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.reps}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.time && formik.touched.time)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Time
                  </FormControl.Label>
                  <Input
                    // keyboardType="numeric"
                    placeholder="Time"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('time')}
                    value={formik.values.time}
                    onBlur={formik.handleBlur('time')}
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.time}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={Boolean(
                  formik.errors.weight && formik.touched.weight,
                )}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Weight (kg)
                  </FormControl.Label>
                  <Input
                    keyboardType="numeric"
                    placeholder="Weight"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('weight')}
                    value={formik.values.weight}
                    onBlur={formik.handleBlur('weight')}
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.weight}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.rest && formik.touched.rest)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Rest
                  </FormControl.Label>
                  <Input
                    // keyboardType="numeric"
                    placeholder="Rest"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('rest')}
                    value={formik.values.rest}
                    onBlur={formik.handleBlur('rest')}
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.rest}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>

              <Button
                w="full"
                bg={'primary.100'}
                rounded={8}
                onPress={() => {
                  formik?.handleSubmit();
                }}
                py={3}
                mt={4}
                _text={{color: 'white', fontWeight: 700}}
                _pressed={{bg: '#68696B90'}}>
                Save
              </Button>
            </VStack>
          </VStack>
        </KeyboardAwareScrollView>
      </Modal.Content>
    </Modal>
  );
}
