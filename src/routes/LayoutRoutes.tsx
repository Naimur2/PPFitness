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
import EditProfile from '@screens/User/EditProfile';
import ChangePassword from '@screens/User/ChangePassword';
import NotificationPreference from '@screens/User/NotificationPreference';
import PrivacySecurity from '@screens/User/PrivacySecurity';
import HelpSupport from '@screens/User/HelpSupport';
import Header from 'src/components/headers/Header';
import RecipeDetails from '@screens/User/RecipeDetails';
import GroceryList from '@screens/User/GroceryList';
import WorkoutAddSet from '@screens/User/WorkoutAddSet';
import AudioCallScreen from '@screens/User/AudioCallScreen';
import VideoCallScreen from '@screens/User/VideoCallScreen';
import {useAddFcmTokenMutation} from '@store/apis/notification';
import {selectFcmToken, setFcmTokenId} from '@store/features/authSlice';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function LayoutRoutes() {
  // hooks
  const token = useSelector(selectFcmToken);
  const dispatch = useDispatch();
  // Apis
  const [addFcmToken] = useAddFcmTokenMutation();

  const handelAddFcm = async () => {
    try {
      const res = await addFcmToken({
        token: token || '',
        type: 'mobile',
      }).unwrap();
      dispatch(setFcmTokenId(res?.data?.data?._id));
    } catch (error) {
      console.log('addFcmToken error', error);
    }
  };

  React.useEffect(() => {
    if (token) {
      handelAddFcm();
    }
  }, []);

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateMealPlan"
        options={{
          header: props => {
            return <Header title={'Create Meal Plan'} />;
          },
        }}
        component={CreateMealPlan}
      />
      <Stack.Screen
        name="GroceryList"
        options={{
          header: props => {
            return <Header title={'Grocery List'} />;
          },
        }}
        component={GroceryList}
      />
      <Stack.Screen
        name="RecipeDetails"
        options={{
          headerShown: false,
        }}
        component={RecipeDetails}
      />
      <Stack.Screen
        name="SettingsScreen"
        options={{
          header: props => {
            return <Header title={'Settings'} />;
          },
        }}
        component={SettingsScreen}
      />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen
        name="Blogs"
        options={{
          header: props => {
            return <Header title={'Blogs'} />;
          },
        }}
        component={Blogs}
      />
      <Stack.Screen
        name="BlogDetails"
        options={{
          header: props => {
            return <Header title={'Blog Details'} />;
          },
        }}
        component={BlogDetails}
      />
      <Stack.Screen
        name="CirCuit"
        options={{
          header: props => {
            return <Header title={'Cir Cuit'} />;
          },
        }}
        component={CirCuit}
      />
      <Stack.Screen
        name="AudioCall"
        component={AudioCallScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VideoCall"
        component={VideoCallScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WorkoutAddSet"
        options={{
          headerShown: false,
        }}
        component={WorkoutAddSet}
      />
      <Stack.Screen
        name="Warmup"
        options={{
          header: props => {
            return <Header title={'Warm-up'} />;
          },
        }}
        component={Warmup}
      />
      <Stack.Screen
        name="ExerciseDetails"
        component={ExerciseDetails}
        options={{
          header: props => {
            return <Header title={'Exercise Details'} />;
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          header: props => {
            return <Header title={'Edit Profile'} />;
          },
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          header: props => {
            return <Header title={'Change Password'} />;
          },
        }}
      />
      <Stack.Screen
        name="NotificationPreference"
        component={NotificationPreference}
        options={{
          header: props => {
            return <Header title={'Notification Preference'} />;
          },
        }}
      />
      <Stack.Screen
        name="PrivacySecurity"
        component={PrivacySecurity}
        options={{
          header: props => {
            return <Header title={'Privacy & Security'} />;
          },
        }}
      />
      <Stack.Screen
        name="HelpSupport"
        component={HelpSupport}
        options={{
          header: props => {
            return <Header title={'Help & Support'} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
