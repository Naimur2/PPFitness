import {useUpdateProfileMutation} from '@store/apis/userProfile';
import {PostV1ProfileUpdateErrorResponse} from '@store/schema';
import {fontSizes} from '@theme/typography';
import dayjs from 'dayjs';

import {useFormik} from 'formik';
import {
  Actionsheet,
  Button,
  FormControl,
  Input,
  Modal,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDown from 'src/components/DropDown';
import * as Yup from 'yup';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

const validationSchema = Yup.object().shape({
  key: Yup.string().required('Key is required'),
  value: Yup.string().required('Value is required'),
  week: Yup.number().required('Week is required'),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const circumferenceKeys: Record<string, string> = {
  right: 'Right',
  left: 'Left',
  neck: 'Neck',
  bicep: 'Bicep',
  chest: 'Chest',
  waist: 'Waist',
  hip: 'Hip',
  leftQuad: 'Left Quad',
  rightQuad: 'Right Quad',
  leftCalf: 'Left Calf',
  rightCalf: 'Right Calf',
};

const weeks = Array.from({length: 52}, (_, i) => ({
  label: `Week ${i + 1}`,
  value: i + 1,
}));

export default function UpdateMeasurementsModal({isOpen, onClose}: IProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [showWeeks, setShowWeeks] = React.useState(false);

  const [updateProfile, {isLoading}] = useUpdateProfileMutation();

  //  formik
  const formik = useFormik({
    initialValues: {
      key: '',
      value: '',
      week: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        await updateProfile({
          circumferences: [
            {
              key: values.key,
              value: values.value,
            },
          ],
        }).unwrap();
        onClose();
        formik.resetForm();
      } catch (error: any) {
        const err = error as PostV1ProfileUpdateErrorResponse;
        Alert.alert(err?.data?.error?.message || 'Something went wrong');
      }
    },
  });

  useEffect(() => {
    const week = dayjs().week();
    console.log('week', week);
    formik?.setValues({
      week: week,
    });
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      zIndex={99}
      onClose={() => {
        onClose?.();
        formik.resetForm();
      }}>
      <Modal.Content w="95%" bg="gray.400" maxW={'500px'}>
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
              Update Circumference Measurements
            </Text>

            <VStack px={4} py={2} bg="white" space={4}>
              {/*  Note */}

              <FormControl isRequired isInvalid={Boolean(formik.errors.week)}>
                <FormControl.Label
                  color={'#1A1929'}
                  _text={{
                    color: 'black',
                    fontSize: fontSizes.sm,
                    fontWeight: 600,
                  }}>
                  Current Week
                </FormControl.Label>
                <DropDown
                  data={weeks}
                  label="Select Week"
                  value={weeks?.find(v => v?.value === formik?.values?.week)}
                  onChange={itemValue => {
                    formik?.setFieldValue('week', itemValue?.label);
                  }}
                  width={'100%'}
                  rounded={5}
                  borderWidth={1}
                  py={'10px'}
                  borderColor={'#F8F8F8'}
                  backgroundColor={'#F8F8F8'}
                  isDisabled
                />
                <FormControl.ErrorMessage>
                  {formik.errors.week}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.key && formik.touched.key)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Select Measurement
                  </FormControl.Label>
                  <Button
                    backgroundColor={'#F8F8F8'}
                    borderWidth={1}
                    borderColor={
                      formik.errors.key ? 'danger.500' : 'transparent'
                    }
                    _text={{color: 'black', textAlign: 'left'}}
                    justifyContent={'flex-start'}
                    onPress={() => setIsDropdownOpen(true)}>
                    {circumferenceKeys[formik.values.key] ||
                      'Select Measurement'}
                  </Button>
                  <FormControl.ErrorMessage>
                    {formik.errors.key}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={Boolean(
                  formik.errors.value && formik.touched.value,
                )}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Value (centimeters)
                  </FormControl.Label>
                  <Input
                    keyboardType="numeric"
                    placeholder="Value"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('value')}
                    value={formik.values.value}
                    onBlur={formik.handleBlur('value')}
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.value}
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
                isDisabled={isLoading}
                _text={{color: 'white', fontWeight: 700}}
                _pressed={{bg: '#68696B90'}}>
                Save
              </Button>
            </VStack>
          </VStack>
        </KeyboardAwareScrollView>
      </Modal.Content>
      <Actionsheet
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}>
        <Actionsheet.Content py={4}>
          <ScrollView w="full" showsVerticalScrollIndicator={false}>
            {Object.entries(circumferenceKeys).map((item, index) => (
              <Actionsheet.Item
                key={index}
                onPress={() => {
                  formik.setFieldValue('key', item[0]);
                  setIsDropdownOpen(false);
                }}>
                {item[1]}
              </Actionsheet.Item>
            ))}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </Modal>
  );
}
