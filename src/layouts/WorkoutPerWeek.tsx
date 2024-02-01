import {fontSizes} from '@theme/typography';
import {HStack, Text as NText, VStack} from 'native-base';
import {BarChart, XAxis, YAxis} from 'react-native-svg-charts';
import React from 'react';
import {useGetWorkoutPerWeekQuery} from '@store/apis/workout';

export default function WorkoutPerWeek() {


  const {data: workoutData} = useGetWorkoutPerWeekQuery();

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
    }, {});
  }, [workoutsInEvery4Weeks]);

  const data = workoutsInEvery4Weeks?.map(item => item.sum) || [];


  return (
    <VStack space={4}>
      <NText color={'#1A1929'} fontSize={fontSizes.lg} fontWeight={700}>
        Workout per week
      </NText>

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
            fontSize: 11,
          }}
          style={{width: 'auto'}}
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
            formatLabel={(value, index) => index + 1 + 'W'}
          />
        </VStack>
      </HStack>
    </VStack>
  );
}
