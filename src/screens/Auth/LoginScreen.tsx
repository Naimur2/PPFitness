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

const FBgImage = Factory(ImageBackground);

export default function LoginScreen() {
  const [eyeOpen, toggleEyeOpen] = useToggle(false);
  const navigation = useNavigation();

  const navigateToSignUp = () => {
    navigation.navigate('Register');
  };

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
          Sign In
        </Text>
        <Text color="gray.4">Please sign in to access your account</Text>
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
          <VStack space={2} alignItems="flex-end">
            <Text color="white" fontSize="sm">
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
            _pressed={{bg: '#68696B90'}}>
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
    </FBgImage>
  );
}
