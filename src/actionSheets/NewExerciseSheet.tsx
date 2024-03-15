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
import DropDown from 'src/components/DropDown';

const colors = [
  '#4FCF8C',
  '#FFC542',
  '#FF5959',
  '##2A9BCE',
  '#FFC542',
  '#FF5959',
  '##2A9BCE',
];

type TOptions = {
  value: string;
  label: string;
};

const bodyParts: TOptions[] = [
  {value: 'Arms', label: 'Arms'},
  {value: 'Legs', label: 'Legs'},
  {value: 'Chest', label: 'Chest'},
  {value: 'Back', label: 'Back'},
  {value: 'Abs', label: 'Abs'},
  {value: 'Shoulders', label: 'Shoulders'},
  {value: 'Glutes', label: 'Glutes'},
  {value: 'Quads', label: 'Quads'},
  {value: 'Hamstrings', label: 'Hamstrings'},
  {value: 'Calves', label: 'Calves'},
  {value: 'Core', label: 'Core'},
  {value: 'Triceps', label: 'Triceps'},
  {value: 'Biceps', label: 'Biceps'},
  {value: 'Obliques', label: 'Obliques'},
  {value: 'Forearms', label: 'Forearms'},
];

const equipmentData = [
  {value: 'Dumbbells', label: 'Dumbbells'},
  {value: 'Barbell', label: 'Barbell'},
  {value: 'Resistance Bands', label: 'Resistance Bands'},
  {value: 'Kettlebell', label: 'Kettlebell'},
  {value: 'Medicine Ball', label: 'Medicine Ball'},
  {value: 'Smith Machine', label: 'Smith Machine'},
  {value: 'Pull-up Bar', label: 'Pull-up Bar'},
  {value: 'Rowing Machine', label: 'Rowing Machine'},
  {value: 'TRX Suspension Trainer', label: 'TRX Suspension Trainer'},
  {value: 'Elliptical Trainer', label: 'Elliptical Trainer'},
  {value: 'Stationary Bike', label: 'Stationary Bike'},
  {value: 'Battle Ropes', label: 'Battle Ropes'},
  {value: 'Pilates Ball', label: 'Pilates Ball'},
  {value: 'Step Platform', label: 'Step Platform'},
  {value: 'Gymnastic Rings', label: 'Gymnastic Rings'},
];

const randomColor = (i: number) => {
  if (i < colors.length) {
    return colors[i];
  }
  const index = i % colors.length;

  return colors[index];
};

const validationSchema = Yup.object().shape({
  label: Yup.string().required('Name is required'),
  tags: Yup.array().of(Yup.string()).min(1, 'At least one tag is required'),
  bodyPart: Yup.string().required('Body part is required'),
  equipment: Yup.string().required('Equipment is required'),
  instruction: Yup.string().required('Instruction is required'),
  video: Yup.object().required('Invalid video is required'),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewExercise({isOpen, onClose}: IProps) {
  // state
  const [tagsVlue, setTagsValue] = React.useState<string>('');

  // Hooks
  const {handleImagePicker} = useImageUploader({
    mediaType: 'video',
  });
  const toast = useShowToastMessage();

  // APIS
  const [fileUpload, {isLoading: isLoadingFile}] = useUpdateFileMutation();
  const [addExercise, {isLoading}] = useAddExerciseMutation();
  //  formik
  const formik = useFormik({
    initialValues: {
      label: '',
      tags: [],
      bodyPart: '',
      equipment: '',
      instruction: '',
      video: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const fileRes = await fileUpload(values?.video).unwrap();
        const res = await addExercise({
          video: fileRes?.data?.data?.[0]?.url,
          label: values?.name,
          tags: values?.tags,
          bodyPart: values?.bodyPart,
          equipment: values?.equipment,
          instruction: values?.instruction,
        }).unwrap();
        onClose();
        toast(res.data?.message);
      } catch (error) {
        toast(error?.data?.error?.message, 'error');
      }
    },
  });

  const handelFileUpload = async () => {
    try {
      const file = await handleImagePicker();
      const formData = new FormData();
      if (file?.fileName && file?.uri) {
        formData.append(
          'files',
          createFormFile(file?.uri, 'image', file?.fileName),
        );
      }
      formik?.setFieldValue('video', formData);
    } catch (error) {}
  };
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
              New Exercise
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
              {/* Body Part*/}
              <FormControl
                isRequired
                isInvalid={Boolean(
                  formik.errors.bodyPart && formik.touched.bodyPart,
                )}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Body Part
                  </FormControl.Label>
                  <Center>
                    <Box w={'full'}>
                      <DropDown
                        data={bodyParts}
                        label="Body Part"
                        value={bodyParts?.find(
                          v => v?.label === formik?.values?.bodyPart,
                        )}
                        onChange={itemValue => {
                          formik?.setFieldValue('bodyPart', itemValue?.label);
                        }}
                        width={'100%'}
                        rounded={5}
                        borderWidth={1}
                        py={'10px'}
                        borderColor={'#F8F8F8'}
                        backgroundColor={'#F8F8F8'}
                      />

                      {/* <Select
                        selectedValue={formik?.values?.bodyPart}
                        minWidth="200"
                        accessibilityLabel="Body Part"
                        placeholder="Select Body Part"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={itemValue => {
                          console.log('itemValue', itemValue);
                          formik?.setFieldValue('bodyPart', itemValue);
                        }}>
                        {bodyParts?.map(v => {
                          return (
                            <Select.Item label={v?.label} value={v?.label} />
                          );
                        })}
                      </Select> */}
                    </Box>
                  </Center>
                  <FormControl.ErrorMessage>
                    {formik.errors.bodyPart}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              {/* Equipment */}
              <FormControl
                isRequired
                isInvalid={Boolean(
                  formik.errors.equipment && formik.touched.equipment,
                )}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Equipment
                  </FormControl.Label>
                  <Center>
                    <Box w={'full'}>
                      <DropDown
                        data={equipmentData}
                        label="Equipment"
                        value={equipmentData?.find(
                          v => v?.value === formik?.values?.equipment,
                        )}
                        onChange={itemValue => {
                          formik?.setFieldValue('equipment', itemValue?.value);
                        }}
                        width={'100%'}
                        rounded={5}
                        borderWidth={1}
                        borderColor={'#F8F8F8'}
                        backgroundColor={'#F8F8F8'}
                        py={'10px'}
                      />
                      {/* <Select
                        selectedValue={formik?.values?.equipment}
                        minWidth="200"
                        accessibilityLabel="Equipment"
                        placeholder="Select Equipment"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={itemValue => {
                          console.log('itemValue', itemValue);
                          formik?.setFieldValue('equipment', itemValue);
                        }}>
                        {equipmentData?.map(v => {
                          return (
                            <Select.Item label={v?.label} value={v?.value} />
                          );
                        })}
                      </Select> */}
                    </Box>
                  </Center>
                  <FormControl.ErrorMessage>
                    {formik.errors.equipment}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              {/* Tags */}
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.tags && formik.touched.tags)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Add Tags
                  </FormControl.Label>
                  <Input
                    placeholder="Tags"
                    fontSize={fontSizes.xs}
                    onChangeText={(text: string) => {
                      setTagsValue(text);
                    }}
                    value={tagsVlue}
                    onBlur={formik.handleBlur('tags')}
                    onSubmitEditing={e => {
                      if (formik.values.tags.includes(tagsVlue)) {
                        return;
                      }
                      formik.setFieldValue('tags', [
                        ...formik.values.tags,
                        tagsVlue,
                      ]);
                      setTagsValue('');
                    }}
                  />

                  <HStack flexWrap="wrap" style={{gap: 5}}>
                    {formik.values.tags.map((tag: string, index: number) => {
                      const color = randomColor(index);
                      return (
                        <HStack
                          key={index}
                          bg={color + '20'}
                          px={3}
                          py={1}
                          borderRadius={5}
                          alignItems="center"
                          justifyContent="center"
                          space={2}>
                          <Pressable
                            onPress={() => {
                              formik.setFieldValue(
                                'tags',
                                formik.values.tags.filter(
                                  (item: string) => item !== tag,
                                ),
                              );
                            }}>
                            <CloseIcon
                              style={{tintColor: color}}
                              height={10}
                              width={10}
                              resizeMode="contain"
                            />
                          </Pressable>
                          <Text fontSize={fontSizes.xs} color={color}>
                            {tag}
                          </Text>
                        </HStack>
                      );
                    })}
                  </HStack>

                  <FormControl.ErrorMessage>
                    {formik.errors.tags}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>

              {/* <HStack
                style={{
                  gap: 10,
                }}>
                {checkBoxValues.map((item, index) => {
                  return (
                    <Checkbox
                      key={index}
                      size="sm"
                      rounded={6}
                      borderColor={'#7D7C81'}
                      _checked={{
                        bg: '##7D7C81',
                        borderColor: '#7D7C81',
                      }}>
                      <Text fontSize={fontSizes.xs} color={'#7D7C81'}>
                        {item.label}
                      </Text>
                    </Checkbox>
                  );
                })}
              </HStack> */}

              <FormControl mt={4}>
                <Stack space={2}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    {formik?.values?.video ? 'Uploaded' : ' Add Video'}
                  </FormControl.Label>

                  <Pressable
                    onPress={handelFileUpload}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    py={4}
                    px={2}
                    minHeight={150}
                    borderRadius={5}
                    borderWidth={1}
                    borderColor={'#7D7C81'}
                    style={{
                      borderStyle: 'dashed',
                    }}>
                    <FileUploadIcon
                      height={50}
                      width={50}
                      resizeMode="contain"
                    />
                    <Text
                      fontSize={fontSizes.xs}
                      color={'#7D7C81'}
                      textAlign="center">
                      Add Video
                    </Text>
                  </Pressable>
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
