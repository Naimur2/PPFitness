import useShowToastMessage from '@hooks/useShowToastMessage';
import {useRoute} from '@react-navigation/native';
import {useUpdateMealPlanMutation} from '@store/apis/mealPlan';
import {useGetAllRecipeQuery} from '@store/apis/recipe';
import {
  GetV1MealPlanGetSuccessfulResponse,
  PostV1MealPlanUpdateErrorResponse,
} from '@store/schema';
import {HStack, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import MealPlanCard from 'src/components/meal-plan/MealPlanCard';
import NotFoundCard from 'src/components/not-found-card';

type Props = {
  title: string;
  data: GetV1MealPlanGetSuccessfulResponse['data']['data'][];
  selectedData: string[];
  onAddNewMeal: (id: string) => void;
};

export default function MelPlanRowCard({
  title,
  data,
  selectedData,
  onAddNewMeal,
}: Props) {
  return (
    <VStack space={4}>
      <Text color="black" fontSize="lg" fontWeight={700} px="4">
        {title}
      </Text>
      {data?.length > 0 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            mb: 4,
          }}>
          <HStack space="2" pb="4" px={2}>
            {data.map((item, index) => (
              <MealPlanCard
                index={index}
                item={item}
                onPress={() => onAddNewMeal?.(item?._id)}
                checked={selectedData?.includes(item?._id)}
              />
            ))}
          </HStack>
        </ScrollView>
      ) : (
        <NotFoundCard title=" No recipe found" />
      )}
    </VStack>
  );
}
