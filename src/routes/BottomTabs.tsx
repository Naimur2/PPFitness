import {View, Text} from 'react-native';
import React from 'react';
import MealPlan from '@screens/User/MealPlan';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import VectorImage from 'react-native-vector-image';
import Exercise from '@screens/User/Exercise';
import {
  ExerciseFillIcon,
  ExerciseIcon,
  MealFillIcon,
  MealIcon,
} from '@assets/icons';

const Tab = createBottomTabNavigator();

type TBottomTabNavigationOptions = (options: {
  route: any;
  focused: boolean;
  color: string;
  size: number;
}) => BottomTabNavigationOptions;

const tabbarOptions: TBottomTabNavigationOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    switch (route.name) {
      case 'MealPlan':
        return focused ? (
          <MealFillIcon height={size} width={size} />
        ) : (
          <MealIcon height={size} width={size} />
        );
      case 'Exercise':
        return focused ? (
          <ExerciseFillIcon height={size} width={size} />
        ) : (
          <ExerciseIcon height={size} width={size} />
        );
      default:
        return null;
    }
  },
  title: '',
  tabBarStyle: {
    height: 60,
  },
});

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={tabbarOptions as any}>
      <Tab.Screen name="MealPlan" component={MealPlan} />
      <Tab.Screen name="Exercise" component={Exercise} />
    </Tab.Navigator>
  );
}
