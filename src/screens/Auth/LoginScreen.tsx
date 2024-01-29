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
import {useLoginMutation} from '@store/apis/auth';
import {
  PostV1AuthLoginErrorResponse,
  PostV1AuthLoginRequestBody,
} from '@store/schema';
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
//
//  validation
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default function LoginScreen() {
  const [eyeOpen, toggleEyeOpen] = useToggle(false);
  const navigation = useNavigation();
  const toast = useShowToastMessage();

  const navigateToSignUp = () => {
    navigation.navigate('Register');
  };

  const [loginUser, {isLoading}] = useLoginMutation();

  const handelRegister = async (data: PostV1AuthLoginRequestBody) => {
    try {
      const res = await loginUser(data).unwrap();
      toast(res?.data.message);
    } catch (error: any) {
      const err = error as PostV1AuthLoginErrorResponse;
      toast(err?.error?.message, 'error');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      await handelRegister({
        email: values.email,
        password: values.password,
        method: 'email',
      });
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;

  //
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

      const data = {
        email: details?.user?.email,
        method: 'google',
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

        <VStack px={4} mt={10}>
          <Text fontSize="2xl" color="white" fontWeight={700}>
            Sign In
          </Text>
          <Text color="gray.4">Please sign in to access your account</Text>
          <VStack mt={10} space="4">
            <FormControl
              isInvalid={Boolean(errors.email) && Boolean(touched.email)}>
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
            <FormControl
              isInvalid={Boolean(errors.password) && Boolean(touched.password)}>
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
                _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                {errors.password}
              </FormControl.ErrorMessage>
            </FormControl>
            <VStack space={2} alignItems="flex-end">
              <Text
                onPress={() => navigation.navigate('ForgetPassword')}
                color="white"
                fontSize="sm">
                Forgot password?
              </Text>
            </VStack>

            <Button
              w="full"
              bg={'secondary.100'}
              rounded={8}
              py={3}
              mt={10}
              _text={{color: 'black', fontWeight: 700}}
              _pressed={{bg: '#68696B90'}}
              isLoading={isLoading}
              onPress={handleSubmit}>
              Sign In
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
                <GoogleIcon height={30} width={30} />
              </Pressable>
              <FacebookIcon height={30} width={30} />
              <AppleIcon height={30} width={30} />
            </VStack>

            <Center
              mt={5}
              display="flex"
              flexDirection="row"
              justifyContent="center">
              <Text color="white" px={2}>
                Don’t have and account?{'  '}
                <Text
                  color="secondary.100"
                  px={2}
                  fontWeight={600}
                  onPress={navigateToSignUp}>
                  Sign Up
                </Text>
              </Text>
            </Center>
          </VStack>
        </VStack>
      </ScrollView>
    </FBgImage>
  );
}
