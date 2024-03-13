import {fontSizes} from '@theme/typography';
import {
  Actionsheet,
  ChevronDownIcon,
  HStack,
  Text as NText,
  Pressable,
  VStack,
} from 'native-base';
import {BarChart, XAxis, YAxis} from 'react-native-svg-charts';
import React from 'react';
import {useGetWorkoutPerWeekQuery} from '@store/apis/workout';

const months = [
  {
    label: 'January',
    value: 1,
  },
  {
    label: 'February',
    value: 2,
  },
  {
    label: 'March',
    value: 3,
  },
  {
    label: 'April',
    value: 4,
  },
  {
    label: 'May',
    value: 5,
  },
  {
    label: 'June',
    value: 6,
  },
  {
    label: 'July',
    value: 7,
  },
  {
    label: 'August',
    value: 8,
  },
  {
    label: 'September',
    value: 9,
  },
  {
    label: 'October',
    value: 10,
  },
  {
    label: 'November',
    value: 11,
  },
  {
    label: 'December',
    value: 12,
  },
];

export default function WorkoutPerWeek() {
  const [selectedMonth, setSelectedMonth] = React.useState(months[0]);
  const [isActionSheetOpen, setIsActionSheetOpen] = React.useState(false);
  const {data: workoutData} = useGetWorkoutPerWeekQuery(selectedMonth.value);

  const workoutsInEvery4Weeks = React.useMemo(() => {
    const data = workoutData?.data?.data?.workoutsByWeek || [];

    const sums = [];
    for (let i = 0; i < 13; i++) {
      const fourWeeks = data?.slice(i * 4, (i + 1) * 4);
      const sum = fourWeeks?.reduce((acc, curr) => {
        return acc + curr.totalWorkouts;
      }, 0);

      sums.push({
        week: i + 1,
        sum,
      });
    }
    return sums;
  }, [workoutData?.data?.data?.workoutsByWeek]);

  const maximumWorkout = React.useMemo(() => {
    return workoutsInEvery4Weeks?.reduce((acc, curr) => {
      return acc.sum > curr.sum ? acc : curr;
    }, {});
  }, [workoutsInEvery4Weeks]);

  const minimumWorkout = React.useMemo(() => {
    return workoutsInEvery4Weeks?.reduce((acc, curr) => {
      return acc.sum < curr.sum ? acc : curr;
    }, {} as any);
  }, [workoutsInEvery4Weeks]);

  const data = workoutsInEvery4Weeks?.map(item => item.sum) || [];

  return (
    <VStack space={4}>
      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        w="100%"
        space={4}>
        <NText color={'#1A1929'} fontSize={fontSizes.lg} fontWeight={700}>
          Workout per week
        </NText>
        <Pressable
          borderWidth={1}
          borderColor={'#8B8B8B'}
          px={4}
          py={2}
          rounded={8}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          onPress={() => {
            setIsActionSheetOpen(true);
          }}>
          <NText color={'#7D7C81'} fontSize={fontSizes.sm} fontWeight={400}>
            {selectedMonth.label}
          </NText>
          <ChevronDownIcon size={4} color={'#7D7C81'} />
        </Pressable>
      </HStack>

      <HStack justifyContent={'space-between'}>
        <YAxis
          data={data}
          contentInset={{
            top: 15,
            bottom: 25,
          }}
          min={minimumWorkout?.sum || 0}
          max={maximumWorkout?.sum || 100}
          svg={{
            fill: 'grey',
            fontSize: 8,
          }}
          style={{width: 35}}
          numberOfTicks={data.length}
          formatLabel={value => `${value}`}
        />
        <VStack w="90%">
          <BarChart
            data={data}
            gridMin={0}
            svg={{fill: '#F39479'}}
            style={{height: 200, width: 'auto'}}
            spacingInner={0.5}
            xAccessor={({item}) => item}
            yAccessor={({item}) => item}
            contentInset={{
              top: 10,
              bottom: 10,
            }}
          />
          <XAxis
            data={data}
            contentInset={{left: 10, right: 10}}
            svg={{fontSize: 8, fill: 'black'}}
            formatLabel={(value, index) => `${(index + 1) * 4}w`}
          />
        </VStack>
      </HStack>

      <Actionsheet
        isOpen={isActionSheetOpen}
        onClose={() => {
          setIsActionSheetOpen(false);
        }}>
        <Actionsheet.Content>
          <VStack space={4}>
            {months.map(month => (
              <Pressable
                key={month.value}
                onPress={() => {
                  setSelectedMonth(month);
                  setIsActionSheetOpen(false);
                }}>
                <NText>{month.label}</NText>
              </Pressable>
            ))}
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </VStack>
  );
}
