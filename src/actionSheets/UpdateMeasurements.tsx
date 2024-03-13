import {useUpdateProfileMutation} from '@store/apis/userProfile';
import {PostV1ProfileUpdateErrorResponse} from '@store/schema';
import {fontSizes} from '@theme/typography';
import {useFormik} from 'formik';
import {
  Actionsheet,
  Button,
  FormControl,
  Input,
  Modal,
  Pressable,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  key: Yup.string().required('Key is required'),
  value: Yup.string().required('Value is required'),
  week: Yup.string().required('Week is required'),
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

  return (
    <Modal
      isOpen={isOpen}
      zIndex={99}
      onClose={() => {
        onClose?.();
        formik.resetForm();
      }}>
      <Modal.Content w="100%" flex={1} bg="gray.400">
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

              <FormControl isRequired isInvalid={Boolean(formik.errors.week)}>
                <Pressable
                  onPress={() => setShowWeeks(true)}
                  bg={'#F8F8F8'}
                  borderWidth={1}
                  borderColor={
                    formik.errors.week ? 'danger.500' : 'transparent'
                  }
                  py={2}
                  rounded={8}>
                  <Text
                    color={'#1A1929'}
                    fontSize={fontSizes.sm}
                    fontWeight={700}
                    textAlign={'center'}>
                    {formik.values.week || 'Week'}
                  </Text>
                </Pressable>
                <FormControl.ErrorMessage>
                  {formik.errors.week}
                </FormControl.ErrorMessage>
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

      <Actionsheet isOpen={showWeeks} onClose={() => setShowWeeks(false)}>
        <Actionsheet.Content py={4}>
          <ScrollView w="full" showsVerticalScrollIndicator={false}>
            {Array.from({length: 52}, (_, i) => i + 1).map((item, index) => (
              <Actionsheet.Item
                key={index}
                onPress={() => {
                  formik.setFieldValue('week', item);
                  setShowWeeks(false);
                }}>
                {item}
              </Actionsheet.Item>
            ))}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </Modal>
  );
}
