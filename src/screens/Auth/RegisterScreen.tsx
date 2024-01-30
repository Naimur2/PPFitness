import {
  AppleIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  FacebookIcon,
  GoogleIcon,
  LockIcon,
} from '@assets/icons';
import useShowToastMessage from '@hooks/useShowToastMessage';
import useToggle from '@hooks/useToggle';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {useRegisterMutation} from '@store/apis/auth';
import {PostV1AuthRegisterRequestBody} from '@store/schema';
import {useFormik} from 'formik';
import {
  Box,
  Button,
  Center,
  Factory,
  FormControl,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {ImageBackground} from 'react-native';
import * as Yup from 'yup';

const FBgImage = Factory(ImageBackground);

//  validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function RegisterScreen() {
  const [eyeOpen, toggleEyeOpen] = useToggle(false);
  const [eyeOpen1, toggleEyeOpen1] = useToggle(false);
  const navigation = useNavigation();
  // Hooks
  const toast = useShowToastMessage();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  const [register, {isLoading}] = useRegisterMutation();

  const handelRegister = async (data: PostV1AuthRegisterRequestBody) => {
    try {
      const res = await register(data).unwrap();
      console.log('res-', res);

      navigation.navigate('Login');
      toast(res?.data.message);
    } catch (error: any) {
      const err = error as
        | {data: PostV1AuthRegisterRequestBody}
        | PostV1AuthRegisterRequestBody;
      console.log('err-', err);
      toast(err?.data?.error?.message || err?.error?.message, 'error');
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async values => {
      await handelRegister(values);
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;

  // handelSignInGoogle
  const handelSignInGoogle = async () => {
    try {
      console.log('Start --->>>>');

      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      // Get the users ID token
      const details = await GoogleSignin.signIn();

      if (!details) return;

      const data = {
        email: details?.user?.email as string,
        method: 'google' as any,
        fullName: details?.user?.name as string,
      };
      await handelRegister(data);
    } catch (error) {
      console.log('Error --->>>>', error);
    }
  };

  return (
    <FBgImage
      source={require('@assets/images/screen2.png')}
      flex={1}
      resizeMode="cover"
      alignItems="center">
      <ScrollView
        _contentContainerStyle={{
          flexGrow: 1,
          width: '100%',
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
        w="100%">
        <Image
          source={require('@assets/images/logo.png')}
          alt="logo"
          mt={16}
          height={100}
          width={100}
          mx={'auto'}
        />

        <VStack w="100%" px={4} mt={10}>
          <Text fontSize="2xl" color="white" fontWeight={700}>
            Create an account
          </Text>
          <Text color="gray.4">Please sign up to access your account</Text>

          <VStack mt={10} space="4">
            <FormControl isInvalid={Boolean(errors.name)}>
              <Input
                bg="white"
                placeholder="Name"
                rounded={8}
                placeholderTextColor={'gray.2'}
                color={'black'}
                _focus={{bg: 'white'}}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />

              <FormControl.ErrorMessage
                color="white"
                _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                {errors.name}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.email)}>
              <Input
                bg="white"
                placeholder="Email"
                rounded={8}
                placeholderTextColor={'gray.2'}
                color={'black'}
                _focus={{bg: 'white'}}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                py={3}
              />
              <FormControl.ErrorMessage
                color="white"
                _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                {errors.email}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.password)}>
              <Input
                bg="white"
                placeholder="Password"
                rounded={8}
                placeholderTextColor={'gray.2'}
                color={'black'}
                type={eyeOpen ? 'text' : 'password'}
                _focus={{bg: 'white'}}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                leftElement={<LockIcon style={{marginLeft: 10}} />}
                rightElement={
                  <Pressable onPress={toggleEyeOpen} mr={'10px'}>
                    {eyeOpen ? <EyeCloseIcon /> : <EyeOpenIcon />}
                  </Pressable>
                }
                py={3}
              />
              <FormControl.ErrorMessage
                color="white"
                _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                {touched.password && errors.password}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.confirmPassword)}>
              <Input
                bg="white"
                placeholder="Confirm Password"
                rounded={8}
                placeholderTextColor={'gray.2'}
                color={'black'}
                type={eyeOpen1 ? 'text' : 'password'}
                _focus={{bg: 'white'}}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                leftElement={<LockIcon style={{marginLeft: 10}} />}
                py={3}
                rightElement={
                  <Pressable onPress={toggleEyeOpen1} mr={'10px'}>
                    {eyeOpen1 ? <EyeCloseIcon /> : <EyeOpenIcon />}
                  </Pressable>
                }
              />
              <FormControl.ErrorMessage
                color="#e41e1e"
                _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                {errors.confirmPassword}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              w="full"
              bg={'secondary.100'}
              rounded={8}
              py={3}
              mt={10}
              _text={{color: 'black', fontWeight: 700}}
              _pressed={{bg: '#68696B90'}}
              onPress={handleSubmit}
              isLoading={isLoading}>
              Sign Up
            </Button>

            <Center
              mt={5}
              display="flex"
              flexDirection="row"
              justifyContent="center">
              <Box bg="white" height={'0.5px'} width="50" />
              <Text color="white" px={2}>
                or continue with
              </Text>
              <Box bg="white" height={'0.5px'} width="50" />
            </Center>

            <VStack
              width="100%"
              alignItems="center"
              justifyContent={'center'}
              flexDirection="row"
              mt={5}
              style={{
                gap: 10,
              }}>
              <Pressable onPress={handelSignInGoogle}>
                <GoogleIcon />
              </Pressable>
              <FacebookIcon />
              <AppleIcon />
            </VStack>

            <Center
              mt={5}
              display="flex"
              flexDirection="row"
              justifyContent="center">
              <Text color="white" px={2}>
                Already have an account?{' '}
                <Text
                  color="secondary.100"
                  px={2}
                  fontWeight={600}
                  onPress={navigateToLogin}>
                  Sign In
                </Text>
              </Text>
            </Center>
          </VStack>
        </VStack>
      </ScrollView>
    </FBgImage>
  );
}
