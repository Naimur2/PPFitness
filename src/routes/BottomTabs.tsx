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
  ChartFillIcon,
  ChartIcon,
  ExerciseFillIcon,
  ExerciseIcon,
  HistoryFillIcon,
  HistoryIcon,
  MealFillIcon,
  MealIcon,
  PhoneFillIcon,
  PhoneIcon,
  ProfileFillIcon,
  ProfileIcon,
} from '@assets/icons';
import ProgramTab from '@screens/User/ProgramTab';
import HistoryTab from '@screens/User/HistoryTab';
import CallScreen from '@screens/User/CallScreen';
import ProfileTab from '@screens/User/ProfileTab';

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
      case 'Program':
        return focused ? (
          <ChartFillIcon height={size} width={size} />
        ) : (
          <ChartIcon height={size} width={size} />
        );
      case 'History':
        return focused ? (
          <HistoryFillIcon height={size} width={size} />
        ) : (
          <HistoryIcon height={size} width={size} />
        );
      case 'Call':
        return focused ? (
          <PhoneFillIcon height={size} width={size} />
        ) : (
          <PhoneIcon height={size} width={size} />
        );
      case 'Profile':
        return focused ? (
          <ProfileFillIcon height={size} width={size} />
        ) : (
          <ProfileIcon height={size} width={size} />
        );
      default:
        return null;
    }
  },
  title: '',
  tabBarStyle: {
    height: 70,
  },
});

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={tabbarOptions as any}>
      <Tab.Screen name="MealPlan" component={MealPlan} />
      <Tab.Screen name="Exercise" component={Exercise} />
      <Tab.Screen name="Program" component={ProgramTab} />
      <Tab.Screen name="History" component={HistoryTab} />
      <Tab.Screen name="Call" component={CallScreen} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}
