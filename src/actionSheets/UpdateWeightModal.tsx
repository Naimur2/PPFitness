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
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  year: Yup.string().required('Year is required'),
  month: Yup.string().required('Month is required'),
  week: Yup.string().required('Week is required'),
  weight: Yup.string()
    .required('Weight is required')
    .matches(/^\d+$/, 'Weight must be a number')
    .min(1, 'Weight must be at least 1 digit'),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpdateWeightModal({isOpen, onClose}: IProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const [updateProfile, {isLoading}] = useUpdateProfileMutation();

  //  formik
  const formik = useFormik({
    initialValues: {
      year: '',
      month: '',
      weight: '',
      week: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        await updateProfile({
          weightHistory: [
            {
              year: values.year,
              month: values.month,
              week: values.week,
              weight: values.weight,
            },
          ],
        }).unwrap();
        onClose();
        Alert.alert('Weight updated successfully');
        formik.resetForm();
      } catch (error: any) {
        const err = error as PostV1ProfileUpdateErrorResponse;
        Alert.alert(err?.data?.error?.message || 'Something went wrong');
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue('year', dayjs().year().toString());
    formik.setFieldValue('month', dayjs().format('MMMM'));
  }, []);

  const arrayOfWeeksOfThisMonth = React.useMemo(() => {
    const weeks = [];
    const daysInMonth = dayjs().daysInMonth();
    let week = 1;
    for (let i = 1; i <= daysInMonth; i++) {
      if (i % 7 === 0) {
        weeks.push({
          label: `Week ${week}`,
          value: week + '',
        });
        week++;
      }
    }
    return weeks;
  }, []);

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
              Update Weight
            </Text>

            <VStack px={4} py={2} bg="white" space={4}>
              {/*  Note */}
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.year && formik.touched.year)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Year
                  </FormControl.Label>
                  <Input
                    placeholder="Year"
                    fontSize={fontSizes.xs}
                    value={formik.values.year}
                    onBlur={formik.handleBlur('year')}
                    isDisabled
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.year}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={Boolean(
                  formik.errors.month && formik.touched.month,
                )}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Month
                  </FormControl.Label>
                  <Input
                    keyboardType="numeric"
                    placeholder="Value"
                    fontSize={fontSizes.xs}
                    value={formik.values.month}
                    onBlur={formik.handleBlur('month')}
                    isDisabled
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.month}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.week && formik.touched.week)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Select Week
                  </FormControl.Label>
                  <Button
                    backgroundColor={'#F8F8F8'}
                    borderWidth={1}
                    borderColor={
                      formik.errors.week ? 'danger.500' : 'transparent'
                    }
                    _text={{color: 'black', textAlign: 'left'}}
                    justifyContent={'flex-start'}
                    onPress={() => setIsDropdownOpen(true)}>
                    {arrayOfWeeksOfThisMonth.find(
                      item => item.value === formik.values.week,
                    )?.label || 'Select Week'}
                  </Button>
                  <FormControl.ErrorMessage>
                    {formik.errors.week}
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
                    placeholder="Weight"
                    fontSize={fontSizes.xs}
                    value={formik.values.weight}
                    onBlur={formik.handleBlur('weight')}
                    onChangeText={formik.handleChange('weight')}
                    keyboardType="numeric"
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.weight}
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
            {arrayOfWeeksOfThisMonth.map((item, index) => (
              <Actionsheet.Item
                key={index}
                onPress={() => {
                  formik.setFieldValue('week', item.value);
                  setIsDropdownOpen(false);
                }}>
                {item.label}
              </Actionsheet.Item>
            ))}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </Modal>
  );
}
