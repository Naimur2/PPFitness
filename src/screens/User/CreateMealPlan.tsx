import useShowToastMessage from '@hooks/useShowToastMessage';
import {useRoute} from '@react-navigation/native';
import {useUpdateMealPlanMutation} from '@store/apis/mealPlan';
import {useGetAllRecipeQuery} from '@store/apis/recipe';
import {PostV1MealPlanUpdateErrorResponse} from '@store/schema';
import {Button, Center, HStack, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import Tab from 'src/components/Tab';
import MealPlanCard from 'src/components/meal-plan/MealPlanCard';
import MealPlanRowCard from 'src/components/meal-plan/MealPlanRowCard';
import NotFoundCard from 'src/components/not-found-card';

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
  const day = (useRoute()?.params as any)?.dailyMicro;

  const [activeTab, setActiveTab] = React.useState(day);

  const [mealPlanData, setMealPlanData] = React.useState<string[]>([]);

  const toast = useShowToastMessage();

  const [handelCreate, {isLoading}] = useUpdateMealPlanMutation();
  const {data} = useGetAllRecipeQuery();
  const handleSubmit = async () => {
    const body = {
      day: activeTab,
      recipe: mealPlanData,
    };
    try {
      const res = await handelCreate(body).unwrap();
      console.log('res', res);
      toast(res?.data?.message);
    } catch (err) {
      console.log('err', err);
      const error = err as PostV1MealPlanUpdateErrorResponse;
      toast(error?.error?.message, 'error');
    }
  };

  const handleAddMeal = (id: string) => {
    if (mealPlanData.includes(id)) {
      const mealPlanDataWithoutId = mealPlanData.filter(item => item !== id);

      setMealPlanData(mealPlanDataWithoutId);
    } else {
      setMealPlanData(prev => [...prev, id]);
    }
  };
  // data
  const mealData = data?.data?.data;
  const breakfastData = mealData?.filter(it => it?.mealType === 'Breakfast');
  const lunchData = mealData?.filter(it => it?.mealType === 'Lunch');
  const dinnerData = mealData?.filter(it => it?.mealType === 'Dinner');
  const snackData = mealData?.filter(it => it?.mealType === 'Snack');

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
      </VStack>
      {/* cards */}
      <MealPlanRowCard
        title="Breakfast"
        data={breakfastData}
        selectedData={mealPlanData}
        onAddNewMeal={id => handleAddMeal(id)}
      />
      <MealPlanRowCard
        title="Lunch"
        data={lunchData}
        selectedData={mealPlanData}
        onAddNewMeal={id => handleAddMeal(id)}
      />
      <MealPlanRowCard
        title="Dinner"
        data={dinnerData}
        selectedData={mealPlanData}
        onAddNewMeal={id => handleAddMeal(id)}
      />
      <MealPlanRowCard
        title="Snack"
        data={snackData}
        selectedData={mealPlanData}
        onAddNewMeal={id => handleAddMeal(id)}
      />
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
