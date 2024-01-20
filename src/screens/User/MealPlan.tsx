import React from 'react';
import {HStack, Image, Pressable, ScrollView, Text, VStack} from 'native-base';
import DailyMacro from 'src/components/meal-plan/DailyMacro';

import Tab from 'src/components/Tab';
import PlanItem from 'src/components/meal-plan/PlanItem';
import {useNavigation} from '@react-navigation/native';
import {AddIcon} from '@assets/icons';
import {useGetAllMealPlanQuery} from '@store/apis/mealPlan';
import {useSelector} from 'react-redux';
import {selectAccessToken} from '@store/features/authSlice';

const dailyMicros = [
  {
    title: 'Calories',
    value: '1800',
    image: require('@assets/images/calories.png'),
  },
  {
    title: 'Protein',
    value: '150g',
    image: require('@assets/images/protein.png'),
  },
  {
    title: 'Carbs',
    value: '300g',
    image: require('@assets/images/carbs.png'),
  },
  {
    title: 'Fat',
    value: '50g',
    image: require('@assets/images/fat.png'),
  },
  {
    title: 'Fiber',
    value: '220g',
    image: require('@assets/images/fiber.png'),
  },
  {
    title: 'Water',
    value: '2.4l',
    image: require('@assets/images/water.png'),
  },
];

const dayTabs = [
  {
    title: 'Mon',
    key: 'Monday',
  },
  {
    title: 'Tue',
    key: 'Tuesday',
  },
  {
    title: 'Wed',
    key: 'Wednesday',
  },
  {
    title: 'Thu',
    key: 'Thursday',
  },
  {
    title: 'Fri',
    key: 'Friday',
  },
  {
    title: 'Sat',
    key: 'Saturday',
  },
  {
    title: 'Sun',
    key: 'Sunday',
  },
];

const snacks = [
  {
    title: 'Pan Cake',
    image:
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    title: 'Pasta',
    image:
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
  },
  {
    title: 'Salad',
    image:
      'https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
];

export default function MealPlan() {
  const [activeTab, setActiveTab] = React.useState('Monday');
  const navigate = useNavigation();
  const token = useSelector(selectAccessToken);
  // APIS
  const {data, isLoading, error} = useGetAllMealPlanQuery(activeTab);

  const navigateToBlogs = () => {
    navigate.navigate('Blogs');
  };
  const navigateToCreateMealPlan = () => {
    navigate.navigate('CreateMealPlan');
  };
  // data
  console.log('data', data?.data);
  console.log('error', error);
  console.log('activeTab', activeTab);

  return (
    <ScrollView
      _contentContainerStyle={{
        flexGrow: 1,
        bg: '#F8F8F8',
        gap: 4,
      }}>
      <VStack px="4" space={4}>
        <Text color="black" fontSize="lg" fontWeight={700}>
          Meal Plan
        </Text>
        <HStack
          justifyContent={'space-between'}
          px={2}
          py={2}
          bg="#FFFFFF"
          rounded="xl"
          shadow={1}>
          {dailyMicros.map((micro, index) => (
            <DailyMacro key={index} {...micro} />
          ))}
        </HStack>
        <HStack justifyContent={'space-between'}>
          <Pressable
            w="48%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
            borderRadius={8}
            borderWidth={2}
            borderColor="primary.100"
            onPress={navigateToCreateMealPlan}
            py={2}>
            <AddIcon />
            <Text color="primary.100" fontSize="xs" fontWeight={700}>
              Create Meal Plan
            </Text>
          </Pressable>
          <Pressable
            w="48%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
            borderRadius={8}
            borderWidth={2}
            borderColor="primary.100"
            py={2}
            onPress={navigateToBlogs}>
            <Text color="primary.100" fontSize="xs" fontWeight={700}>
              Blog / Articles
            </Text>
          </Pressable>
        </HStack>
        <Tab tabs={dayTabs} activeTab={activeTab} onPress={setActiveTab} />

        <PlanItem
          title="Breakfast"
          items={[
            {
              title: 'Oats with protein',
              image:
                'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
              description: '60g carbs . 25g protein . 0g fat . 300 Kcal ',
            },
          ]}
        />
        <PlanItem
          title="Lunch"
          items={[
            {
              title: 'Boiled rice with chicken',
              image:
                'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
              description: '60g carbs . 25g protein . 0g fat . 300 Kcal ',
            },
          ]}
        />
        <PlanItem
          title="Dinner"
          items={[
            {
              title: 'Beef Steak with Vegetables',
              image:
                'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              description: '60g carbs . 25g protein . 0g fat . 300 Kcal ',
            },
          ]}
        />
      </VStack>

      <Text color="black" fontSize="lg" fontWeight={700} px="4">
        Snacks
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          mb: 4,
        }}>
        <HStack space="2" px="4" pb="4">
          {snacks.map((item, index) => (
            <VStack
              key={index}
              justifyContent="center"
              px={2}
              style={{
                gap: 8,
              }}>
              <Image
                source={{uri: item.image}}
                alt={item.title}
                height={'120px'}
                width={'150px'}
                rounded="lg"
              />

              <Text fontSize="sm" fontWeight={600} color="black">
                {item.title}
              </Text>
            </VStack>
          ))}
        </HStack>
      </ScrollView>
    </ScrollView>
  );
}
