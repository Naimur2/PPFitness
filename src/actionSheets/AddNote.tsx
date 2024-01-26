import React from 'react';
import {
  Button,
  FormControl,
  Input,
  Modal,
  Stack,
  Text,
  VStack,
} from 'native-base';
import {fontSizes} from '@theme/typography';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const validationSchema = Yup.object().shape({
  note: Yup.string().required('Note is required'),
});

interface IProps {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onPress: () => void;
  onSetValue?: (props: string) => void;
}

export default function AddNote({
  isOpen,
  isLoading,
  onClose,
  onSetValue,
  onPress,
}: IProps) {
  //  formik
  const formik = useFormik({
    initialValues: {
      note: '',
    },
    validationSchema,
    onSubmit: async values => {
      onSetValue?.(values?.note);
      onPress?.();
    },
  });

  return (
    <Modal zIndex={99} isOpen={isOpen} onClose={onClose}>
      <Modal.Content w="100%" h="50%">
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}>
          <VStack bg={'white'} py={4}>
            <Text
              fontSize={fontSizes.xl}
              fontWeight="bold"
              color="black"
              textAlign="center"
              py={4}>
              Edit Note
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
                    multiline={true}
                    numberOfLines={10}
                    textAlignVertical="top"
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
                py={3}
                mt={4}
                isLoading={isLoading}
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
