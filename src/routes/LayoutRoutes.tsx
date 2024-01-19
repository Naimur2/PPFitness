import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import Blogs from '@screens/User/Blogs';
import Calendar from '@screens/User/Calendar';
import SettingsScreen from '@screens/User/SettingsScreen';
import CreateMealPlan from '@screens/User/CreateMealPlan';
import CirCuit from '@screens/User/CirCuit';
import Warmup from '@screens/User/Warmup';
import ExerciseDetails from '@screens/User/ExerciseDetails';
import BlogDetails from '@screens/User/BlogDetails';

const Stack = createNativeStackNavigator();

export default function LayoutRoutes() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="CreateMealPlan" component={CreateMealPlan} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Blogs" component={Blogs} />
      <Stack.Screen
        name="BlogDetails"
        options={{
          headerTitle: 'Blog Details',
        }}
        component={BlogDetails}
      />
      <Stack.Screen name="CirCuit" component={CirCuit} />
      <Stack.Screen name="Warmup" component={Warmup} />
      <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
    </Stack.Navigator>
  );
}
