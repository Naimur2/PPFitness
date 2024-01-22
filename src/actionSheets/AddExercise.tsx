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
import useImageUploader from '@hooks/useImageUploader';
import useShowToastMessage from '@hooks/useShowToastMessage';
import createFormFile from 'src/utils/fileDetails';
import {useAddExerciseMutation} from '@store/apis/exercise';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  instruction: Yup.string().required('Instruction is required'),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddExercise({isOpen, onClose}: IProps) {
  // state

  // Hooks
  const toast = useShowToastMessage();

  // APIS
  const [addExercise, {isLoading}] = useAddExerciseMutation();
  //  formik
  const formik = useFormik({
    initialValues: {
      name: '',
      instruction: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const res = await addExercise({
          name: values?.name,
          instruction: values?.instruction,
        }).unwrap();
        onClose();
        toast(res.data?.message);
      } catch (error) {
        toast(error?.data?.error?.message, 'error');
      }
    },
  });

  return (
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
              Add Exercise
            </Text>

            <VStack px={4} py={2} bg="white" space={4}>
              {/* Exercise Name */}
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.name && formik.touched.name)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Exercise Name
                  </FormControl.Label>
                  <Input
                    placeholder="Exercise Name"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('name')}
                    value={formik.values.name}
                    onBlur={formik.handleBlur('name')}
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.name}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={Boolean(
                  formik.errors.instruction && formik.touched.instruction,
                )}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Instruction
                  </FormControl.Label>
                  <Input
                    placeholder="Instruction"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('instruction')}
                    value={formik.values.instruction}
                    onBlur={formik.handleBlur('instruction')}
                    numberOfLines={5}
                    multiline={true}
                    textAlignVertical="top"
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.instruction}
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
                isLoading={isLoading}
                py={3}
                mt={4}
                _text={{color: 'white', fontWeight: 700}}
                _pressed={{bg: '#68696B90'}}>
                Get Started
              </Button>
            </VStack>
          </VStack>
        </KeyboardAwareScrollView>
      </Modal.Content>
    </Modal>
  );
}
