import {ImageBackground} from 'react-native';
import React from 'react';
import {
  Box,
  Button,
  Center,
  Factory,
  FormControl,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import VectorImage from 'react-native-vector-image';
import useToggle from '@hooks/useToggle';
import {useNavigation} from '@react-navigation/native';
import {
  AppleIcon,
  EmailIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  FacebookIcon,
  GoogleIcon,
  LockIcon,
} from '@assets/icons';
import {useRegisterMutation} from '@store/apis/auth';
import {Formik, useFormik} from 'formik';

const FBgImage = Factory(ImageBackground);

export default function RegisterScreen() {
  const [eyeOpen, toggleEyeOpen] = useToggle(false);
  const [eyeOpen1, toggleEyeOpen1] = useToggle(false);
  const navigation = useNavigation();

  // APIS
  const [register, {isLoading}] = useRegisterMutation();

  const navigateToLogin = () => {
    // navigation.navigate('Login');
  };
  const handelRegister = async () => {
    const body = {
      email: 'user@example.com',
      password: 'stringst',
      method: 'email',
      fullName: 'string',
    };
    try {
      const res = await register(body).unwrap();
      console.log('res-', res);
    } catch (error) {
      console.log('err', error);
    }
  };

  //
  // Hooks

  // const formik = useFormik({
  //   initialValues: {},
  //   // validationSchema: {},
  //   onSubmit: async values => {
  //     await handelRegister(values);
  //   },
  // });

  // const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
  //   formik;

  return (
    <FBgImage
      source={require('@assets/images/screen2.png')}
      flex={1}
      resizeMode="cover"
      alignItems="center">
      <Image
        source={require('@assets/images/logo.png')}
        alt="logo"
        mt={16}
        height={100}
        width={100}
      />

      <VStack w="100%" px={4} mt={10}>
        <Text fontSize="2xl" color="white" fontWeight={700}>
          Create an account
        </Text>
        <Text color="gray.4">Please sign up to access your account</Text>

        <VStack mt={10} space="4">
          <FormControl>
            <Input
              bg="white"
              placeholder="Email"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'black'}
              _focus={{bg: 'white'}}
              leftElement={<EmailIcon style={{marginLeft: 10}} />}
            />
            <FormControl.ErrorMessage color="white">
              This is an error
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl>
            <Input
              bg="white"
              placeholder="Password"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'black'}
              type={eyeOpen ? 'text' : 'password'}
              _focus={{bg: 'white'}}
              leftElement={<LockIcon style={{marginLeft: 10}} />}
              rightElement={
                <Pressable onPress={toggleEyeOpen} mr={'10px'}>
                  {eyeOpen ? <EyeCloseIcon /> : <EyeOpenIcon />}
                </Pressable>
              }
            />
            <FormControl.ErrorMessage color="white">
              This is an error
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl>
            <Input
              bg="white"
              placeholder="Confirm Password"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'black'}
              type={eyeOpen1 ? 'text' : 'password'}
              _focus={{bg: 'white'}}
              leftElement={<LockIcon style={{marginLeft: 10}} />}
              rightElement={
                <Pressable onPress={toggleEyeOpen1} mr={'10px'}>
                  {eyeOpen1 ? <EyeCloseIcon /> : <EyeOpenIcon />}
                </Pressable>
              }
            />
            <FormControl.ErrorMessage color="white">
              This is an error
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
            onPress={handelRegister}>
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
            <GoogleIcon />
            <FacebookIcon />
            <AppleIcon />
          </VStack>

          <Center
            mt={5}
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <Text color="white" px={2}>
              Already have an account?{'  '}
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
    </FBgImage>
  );
}
