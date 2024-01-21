import React from 'react';
import {
  Button,
  Center,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useUpdateMealPlanMutation} from '@store/apis/mealPlan';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {PostV1MealPlanUpdateErrorResponse} from '@store/schema';
import MealPlanCard from 'src/components/meal-plan/MealPlanCard';
import {useGetAllRecipeQuery} from '@store/apis/recipe';
import Tab from 'src/components/Tab';

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

export default function CreateMealPlan() {
  const day = useRoute()?.params?.dailyMicro;

  const [activeTab, setActiveTab] = React.useState(day);
  const navigate = useNavigation();
  const [mealPlanData, setMealPlanData] = React.useState<string[]>([]);
  // Hooks
  const toast = useShowToastMessage();
  // APIS

  const [handelCreate, {isLoading}] = useUpdateMealPlanMutation();
  const {data} = useGetAllRecipeQuery();
  const handleSubmit = async () => {
    const body = {
      day: activeTab,
      recipe: mealPlanData,
    };
    try {
      console.log('body', body);

      const res = await handelCreate(body).unwrap();
      console.log('res', res);
      toast(res?.data?.message);
    } catch (err) {
      console.log('err', err);
      const error = err as PostV1MealPlanUpdateErrorResponse;
      toast(error?.error?.message, 'error');
    }
  };
  // data

  console.log('mealPlanData', mealPlanData);

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
        <VStack px={2}>
          <Tab tabs={dayTabs} activeTab={activeTab} onPress={setActiveTab} />
        </VStack>
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
            {data?.data?.data
              ?.filter(it => it?.mealType === 'Breakfast')
              .map((item, index) => (
                <MealPlanCard
                  index={index}
                  item={item}
                  onPress={() => {
                    setMealPlanData(prv => {
                      const itemId = item?._id;

                      // Check if the item is already in the array
                      const itemIndex = prv.indexOf(itemId);

                      if (itemIndex !== -1) {
                        // If the item is found, remove it from the array
                        const updatedArray = [...prv];
                        updatedArray.splice(itemIndex, 1);
                        return updatedArray;
                      }

                      // If the item is not found, add it to the array
                      return [...prv, itemId];
                    });
                  }}
                  checked={mealPlanData?.indexOf(item?._id) == 0 ? true : false}
                />
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
            {data?.data?.data
              ?.filter(it => it?.mealType === 'Lunch')
              .map((item, index) => (
                <MealPlanCard
                  index={index}
                  item={item}
                  onPress={() => {
                    setMealPlanData(prv => [...prv, item?._id]);
                  }}
                  checked={true}
                />
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
            {data?.data?.data
              ?.filter(it => it?.mealType === 'Dinner')
              ?.map((item, index) => (
                <MealPlanCard
                  index={index}
                  item={item}
                  onPress={() => {
                    setMealPlanData(prv => [...prv, item?._id]);
                  }}
                  checked={true}
                />
              ))}
          </HStack>
        </ScrollView>
      </VStack>
      <Center px={4}>
        <Button
          w="full"
          bg={'secondary.100'}
          rounded={8}
          py={3}
          _text={{color: 'black', fontWeight: 700}}
          _pressed={{bg: '#68696B90'}}
          onPress={handleSubmit}
          isLoading={isLoading}>
          Save
        </Button>
      </Center>
    </ScrollView>
  );
}
