import {
  Box,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import DailyMacro from 'src/components/meal-plan/DailyMacro';

import {AddIcon} from '@assets/icons';
import {useNavigation} from '@react-navigation/native';
import {useGetAllMealPlanQuery} from '@store/apis/mealPlan';
import Tab from 'src/components/Tab';
import Header from 'src/components/headers/Header';
import PlanItem from 'src/components/meal-plan/PlanItem';
import {
  SkeletonsDailyMacro,
  SkeletonsRecipePlan,
} from 'src/components/skeletons';

const dailyMicros = [
  {
    title: 'Calories',
    key: 'calories',
    image: require('@assets/images/calories.png'),
  },
  {
    title: 'Protein',
    key: 'protein',
    image: require('@assets/images/protein.png'),
  },
  {
    title: 'Carbs',
    key: 'carbs',
    image: require('@assets/images/carbs.png'),
  },
  {
    title: 'Fat',
    key: 'fat',
    image: require('@assets/images/fat.png'),
  },
  {
    title: 'Fiber',
    key: 'fiber',
    image: require('@assets/images/fiber.png'),
  },
  {
    title: 'Water',
    key: 'water',
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

export default function MealPlan() {
  const [activeTab, setActiveTab] = React.useState('Sunday');
  const navigate = useNavigation();

  const {data, isLoading, error} = useGetAllMealPlanQuery(activeTab);

  console.log('data', data);
  console.log(activeTab);

  const navigateToBlogs = () => {
    navigate.navigate('Blogs');
  };
  const navigateToCreateMealPlan = () => {
    navigate.navigate('CreateMealPlan', {
      dailyMicro: activeTab,
    });
  };

  // SnackData
  const SnackData = data?.data?.data?.recipe?.filter(
    it => it?.mealType === 'Snack',
  );

  const macrosWithValues = React.useMemo(() => {
    return dailyMicros.map(micro => {
      const macro = data?.data?.data?.dailyMacro?.find(
        t => t?.name?.toLowerCase() === micro?.title?.toLowerCase(),
      );
      return {
        ...micro,
        value: `${macro?.quantity ?? 0} ${macro?.unit ?? ''}`,
      };
    });
  }, [data]);

  return (
    <Box>
      <Header
        title={'Meal Plan'}
        onPress={() =>
          navigate?.navigate('GroceryList', {
            groceryList: data?.data?.data?.groceryList,
          })
        }
        iconRightType="listBucket"
      />
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
          {isLoading ? (
            <SkeletonsDailyMacro />
          ) : (
            <>
              <HStack
                justifyContent={'space-between'}
                px={2}
                py={2}
                bg="#FFFFFF"
                rounded="xl"
                shadow={1}>
                {macrosWithValues?.map((micro, index) => (
                  <DailyMacro
                    title={micro.title}
                    image={micro.image}
                    value={micro?.value ?? 0}
                  />
                ))}
              </HStack>
            </>
          )}
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
          {isLoading ? (
            <SkeletonsRecipePlan />
          ) : (
            <>
              <PlanItem
                title="Breakfast"
                items={data?.data?.data?.recipe?.filter(
                  it => it?.mealType === 'Breakfast',
                )}
              />
              <PlanItem
                title="Lunch"
                items={data?.data?.data?.recipe?.filter(
                  it => it?.mealType === 'Lunch',
                )}
              />
              <PlanItem
                title="Dinner"
                items={data?.data?.data?.recipe?.filter(
                  it => it?.mealType === 'Dinner',
                )}
              />
            </>
          )}
        </VStack>
        {SnackData?.length > 0 && (
          <Text color="black" fontSize="lg" fontWeight={700} px="4">
            Snacks
          </Text>
        )}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            mb: 4,
          }}>
          <HStack space="2" px="4" pb="4">
            {SnackData?.map((item, index) => (
              <VStack
                key={index}
                justifyContent="center"
                px={2}
                style={{
                  gap: 8,
                }}>
                <Image
                  source={{uri: item?.photo}}
                  alt={item.name}
                  height={'120px'}
                  width={'150px'}
                  rounded="lg"
                />

                <Text fontSize="sm" fontWeight={600} color="black">
                  {item.name}
                </Text>
              </VStack>
            ))}
          </HStack>
        </ScrollView>
      </ScrollView>
    </Box>
  );
}
