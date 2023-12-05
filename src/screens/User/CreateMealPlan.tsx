import React from 'react';
import {HStack, Image, Pressable, ScrollView, Text, VStack} from 'native-base';
import DailyMacro from 'src/components/meal-plan/DailyMacro';

import Tab from 'src/components/Tab';
import PlanItem from 'src/components/meal-plan/PlanItem';
import {useNavigation} from '@react-navigation/native';
import {AddIcon} from '@assets/icons';

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
    key: 'Mon',
  },
  {
    title: 'Tue',
    key: 'Tue',
  },
  {
    title: 'Wed',
    key: 'Wed',
  },
  {
    title: 'Thu',
    key: 'Thu',
  },
  {
    title: 'Fri',
    key: 'Fri',
  },
  {
    title: 'Sat',
    key: 'Sat',
  },
  {
    title: 'Sun',
    key: 'Sun',
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

export default function CreateMealPlan() {
  const [activeTab, setActiveTab] = React.useState('Mon');
  const navigate = useNavigation();

  const navigateToBlogs = () => {
    navigate.navigate('Blogs');
  };

  return (
    <ScrollView
      nestedScrollEnabled={true}
      _contentContainerStyle={{
        flexGrow: 1,
        bg: '#F8F8F8',
        gap: 4,
        paddingVertical: 16,
      }}>
      <VStack space={4}>
        <Text color="black" fontSize="lg" fontWeight={700} px="4">
          Breakfast
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            mb: 4,
          }}>
          <HStack space="2" pb="4" px={2}>
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
                  height={'200px'}
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
      </VStack>
      <VStack space={4}>
        <Text color="black" fontSize="lg" fontWeight={700} px="4">
          Lunch
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            mb: 4,
          }}>
          <HStack space="2" pb="4" px={2}>
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
                  height={'200px'}
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
      </VStack>
      <VStack space={4}>
        <Text color="black" fontSize="lg" fontWeight={700} px="4">
          Dinner
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            mb: 4,
          }}>
          <HStack space="2" pb="4" px={2}>
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
                  height={'200px'}
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
      </VStack>
    </ScrollView>
  );
}
