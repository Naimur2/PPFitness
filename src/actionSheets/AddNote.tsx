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
  note: Yup.string().required('Note is required'),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddNote({isOpen, onClose}: IProps) {
  // state

  // Hooks

  const toast = useShowToastMessage();

  // APIS
  const [addExercise, {isLoading}] = useAddExerciseMutation();
  //  formik
  const formik = useFormik({
    initialValues: {
      note: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const res = await addExercise({
          name: values?.name,
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
              {/*  Note */}
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.note && formik.touched.note)}>
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
                    onChangeText={formik.handleChange('note')}
                    value={formik.values.note}
                    onBlur={formik.handleBlur('note')}
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.note}
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
                isLoading={isLoading || isLoadingFile}
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

const bodyPartData = [
  {id: 1, name: 'Arms'},
  {id: 2, name: 'Legs'},
  {id: 3, name: 'Chest'},
  {id: 4, name: 'Back'},
  {id: 5, name: 'Abs'},
  {id: 6, name: 'Shoulders'},
  {id: 7, name: 'Glutes'},
  {id: 8, name: 'Quads'},
  {id: 9, name: 'Hamstrings'},
  {id: 10, name: 'Calves'},
  {id: 11, name: 'Core'},
  {id: 12, name: 'Triceps'},
  {id: 13, name: 'Biceps'},
  {id: 14, name: 'Obliques'},
  {id: 15, name: 'Forearms'},
];

const equipmentData = [
  {id: 1, name: 'Dumbbells'},
  {id: 2, name: 'Barbell'},
  {id: 3, name: 'Resistance Bands'},
  {id: 4, name: 'Kettlebell'},
  {id: 5, name: 'Medicine Ball'},
  {id: 6, name: 'Smith Machine'},
  {id: 7, name: 'Pull-up Bar'},
  {id: 8, name: 'Rowing Machine'},
  {id: 9, name: 'TRX Suspension Trainer'},
  {id: 10, name: 'Elliptical Trainer'},
  {id: 11, name: 'Stationary Bike'},
  {id: 12, name: 'Battle Ropes'},
  {id: 13, name: 'Pilates Ball'},
  {id: 14, name: 'Step Platform'},
  {id: 15, name: 'Gymnastic Rings'},
];
