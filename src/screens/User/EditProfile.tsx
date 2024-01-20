import {StyleSheet} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {Button, FormControl, Input, VStack} from 'native-base';
import useNavigate from '@hooks/useNavigate';
import {PostV1ProfileUpdateErrorResponse} from '@store/schema';
import CountryPicker from 'src/components/picker/CountryPicker';
import {useUpdateProfileMutation} from '@store/apis/userProfile';
//  validation
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});
// You2$Ppsw
export default function EditProfile() {
  // hooks
  const toast = useShowToastMessage();
  const navigate = useNavigate();

  //  APIS
  const [updateProfile, {isLoading}] = useUpdateProfileMutation();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      number: '',
      country: {},
    },
    // validationSchema,
    onSubmit: async values => {
      await handelUpdateProfile(values);
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;

  const handelUpdateProfile = async () => {
    // return;
    const body = {
      fullName: values?.fullName,
      email: values?.email,
      number: values?.number,
      country: {},
    };

    try {
      const res = await updateProfile(body).unwrap();
      console.log('res-', res);
      toast(res?.data.message);
      navigate(undefined, undefined, 'goBack');
    } catch (err) {
      const error = err as PostV1ProfileUpdateErrorResponse;
      toast(error?.error?.message, 'error');
    }
  };
  console.log('values', values);

  // con
  return (
    <VStack w="100%" px={4} mt={10}>
      <VStack space="4">
        <FormControl isInvalid={Boolean(errors.fullName)}>
          <FormControl.Label>Full Name</FormControl.Label>
          <Input
            bg="white"
            placeholder="Full Name"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'black'}
            type={'text'}
            _focus={{bg: 'white'}}
            onChangeText={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            value={values.fullName}
          />
          <FormControl.ErrorMessage color="white">
            {errors.fullName}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.email)}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            bg="white"
            placeholder="Email"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'black'}
            type={'text'}
            _focus={{bg: 'white'}}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.email}
          />
          <FormControl.ErrorMessage color="white">
            {errors.email}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.number)}>
          <FormControl.Label>Phone Number</FormControl.Label>
          <Input
            bg="white"
            placeholder="Phone Number"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'black'}
            type={'text'}
            _focus={{bg: 'white'}}
            onChangeText={handleChange('number')}
            onBlur={handleBlur('number')}
            value={values.number}
          />
          <FormControl.ErrorMessage color="white">
            {errors.number}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.country)}>
          <FormControl.Label>Country</FormControl.Label>
          <CountryPicker
            values={values.country}
            handleChange={value => {
              setFieldValue('country', value);
            }}
          />
          <FormControl.ErrorMessage color="white">
            {errors.country}
          </FormControl.ErrorMessage>
        </FormControl>

        <Button
          w="full"
          bg={'secondary.100'}
          rounded={8}
          py={3}
          _text={{color: 'black', fontWeight: 700}}
          _pressed={{bg: '#68696B90'}}
          onPress={handleSubmit}
          isLoading={isLoading}>
          Save
        </Button>
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({});
