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
import {PostV1AuthLoginRequestBody} from '@store/schema';
import {useFormik} from 'formik';
import crypto from 'crypto';

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
import {Alert, ImageBackground, Platform} from 'react-native';
import {AccessToken, LoginManager, Profile} from 'react-native-fbsdk-next';
import * as Yup from 'yup';
import {
  appleAuthAndroid,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

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
      const err = error as
        | {data: PostV1AuthRegisterRequestBody}
        | PostV1AuthRegisterRequestBody;
      toast(err?.data?.error?.message || err.message, 'error');
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
      const hasPlayServices = await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      if (!hasPlayServices) {
        Alert.alert('Google Play Services are not available');
        return;
      }

      // Get the users ID token
      const details = await GoogleSignin.signIn();
      const idToken = details?.idToken;

      await handelRegister({
        email: details?.user?.email,
        method: 'google',
        idToken: idToken ?? undefined,
      });
    } catch (error) {
      console.log('Error --->>>>', error);
    }
  };

  // handelSignInFacebook
  const handelSignInFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (!result.isCancelled) {
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
          throw new Error(
            'Something went wrong obtaining the users access token',
          );
        }

        const profile = await Profile.getCurrentProfile();
        if (!profile?.email) {
          throw new Error('Something went wrong obtaining the users profile');
        }
        await handelRegister({
          email: profile?.email,
          method: 'facebook',
          idToken: data.accessToken ?? undefined,
        });
      }
    } catch (error) {
      Alert.alert(
        'Error',
        error?.message || 'Something went wrong obtaining the users email',
      );
      console.log('Error --->>>>', error);
    }
  };

  // handleSignInApple for ios
  const handleSignInApple = async () => {
    try {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        // Note: it appears putting FULL_NAME first is important, see issue #293
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      const idToken = appleAuthRequestResponse.identityToken;
      const userName = appleAuthRequestResponse.fullName;
      const userEmail = appleAuthRequestResponse.email;

      const nonceData = appleAuthRequestResponse.nonce;

      const hashedNonce = crypto
        .createHash('sha256')
        .update(nonceData)
        .digest('hex');

      if (!userEmail)
        throw new Error('Something went wrong obtaining the users email');

      await handelRegister({
        email: userEmail,
        method: 'apple',
        idToken: idToken ?? undefined,
        nonce: hashedNonce,
      });
    } catch (error) {
      Alert.alert(
        'Error',
        error?.message || 'Something went wrong obtaining the users email',
      );
    }
  };

  // onAppleButtonPressAndroid for android
  async function onAppleButtonPressAndroid() {
    try {
      // Generate secure, random values for state and nonce
      const rawNonce = uuid();
      const state = uuid();

      // Configure the request
      appleAuthAndroid.configure({
        // The Service ID you registered with Apple
        clientId: 'com.ppfitness.android.app',

        // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
        // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
        redirectUri: 'https://ppfitness-server.onrender.com',

        // The type of response requested - code, id_token, or both.
        responseType: appleAuthAndroid.ResponseType.ALL,

        // The amount of user information requested from Apple.
        scope: appleAuthAndroid.Scope.ALL,

        // Random nonce value that will be SHA256 hashed before sending to Apple.
        nonce: rawNonce,

        // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
        state,
      });

      const response = await appleAuthAndroid.signIn();
      const idToken = response.id_token;
      const useeName = response.user?.email;
      const userEmail = response.user?.email;

      if (!userEmail) {
        throw new Error('Something went wrong obtaining the users email');
      }

      const hashedNonce = crypto
        .createHash('sha256')
        .update(rawNonce)
        .digest('hex');

      await handelRegister({
        email: userEmail,
        method: 'apple',
        idToken: idToken ?? undefined,
        nonce: hashedNonce,
      });
    } catch (error) {
      Alert.alert(
        'Error',
        error?.message || 'Something went wrong obtaining the users email',
      );
    }
  }

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
              <Pressable onPress={handelSignInFacebook}>
                <FacebookIcon height={30} width={30} />
              </Pressable>
              <Pressable
                onPress={
                  Platform.OS === 'ios'
                    ? handleSignInApple
                    : onAppleButtonPressAndroid
                }>
                <AppleIcon height={30} width={30} />
              </Pressable>
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
