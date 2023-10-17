import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import Blogs from '@screens/User/Blogs';
import ExerciseDetails from '@screens/User/ExerciseDetails';

const Stack = createNativeStackNavigator();

export default function LatoutRoutes() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Blogs" component={Blogs} />
      <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
    </Stack.Navigator>
  );
}
