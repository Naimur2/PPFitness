import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailOtpVerify from '@screens/Auth/EmailOtpVerify';
import ForgetPassword from '@screens/Auth/ForgetPassword';
import LoginScreen from '@screens/Auth/LoginScreen';
import RegisterScreen from '@screens/Auth/RegisterScreen';
import ResetPassword from '@screens/Auth/ResetPassword';
import WelcomeScreen from '@screens/Auth/WelcomeScreen';
import { selectHasViewedOnboarding } from '@store/features/ui/uiSlice';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  const hasViewedOnboarding = useSelector(selectHasViewedOnboarding);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {hasViewedOnboarding ? (
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="EmailOtpVerify" component={EmailOtpVerify} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Group>
      ) : (
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      )}
    </Stack.Navigator>
  );
}
