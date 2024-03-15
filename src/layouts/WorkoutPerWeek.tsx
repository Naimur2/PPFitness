import {fontSizes} from '@theme/typography';
import {
  Actionsheet,
  ChevronDownIcon,
  HStack,
  Text as NText,
  Pressable,
  VStack,
} from 'native-base';
import {AreaChart, BarChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import React from 'react';
import {useGetWorkoutPerWeekQuery} from '@store/apis/workout';

import weekOfYear from 'dayjs/plugin/weekOfYear';
import dayjs from 'dayjs';
import {Circle, Path} from 'react-native-svg';
import DropDown from 'src/components/DropDown';

dayjs.extend(weekOfYear);

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

const Decorators = ({x, y, data}: {x: any; y: any; data: any}) => {
  return data.map((value, index) => (
    <Circle
      key={index}
      cx={x(index)}
      cy={y(value)}
      r={4}
      stroke={'#1AE13A'}
      fill={'white'}
    />
  ));
};

const Line = ({line}) => <Path d={line} stroke={'#1AE13A'} fill={'none'} />;

const contentInset = {top: 20, bottom: 5, left: 10};

export default function WorkoutPerWeek() {
  const [selectedMonth, setSelectedMonth] = React.useState(months[0]);
  const [isActionSheetOpen, setIsActionSheetOpen] = React.useState(false);
  const {data: workoutData} = useGetWorkoutPerWeekQuery(selectedMonth.value);

  const dataToShow = React.useMemo(() => {
    const startOfMonth = dayjs()
      .set('month', selectedMonth.value - 1)
      .startOf('month')
      .week();
    const endOfMonth = dayjs()
      .set('month', selectedMonth.value - 1)
      .endOf('month')
      .week();

    console.log('startOfMonth', startOfMonth);
    console.log('endOfMonth', endOfMonth);

    const weekData = [];

    for (let week = startOfMonth; week < endOfMonth; week++) {
      const findWeek = workoutData?.data?.data?.workoutsByWeek?.find(
        item => item.week.toString() === week.toString(),
      );

      if (findWeek) {
        weekData.push({
          label: `W${week}`,
          value: findWeek.totalWorkouts,
        });
      } else {
        weekData.push({
          label: `W${week}`,
          value: 0,
        });
      }
    }

    return weekData;
  }, [selectedMonth.value, workoutData?.data?.data?.workoutsByWeek]);

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
        <DropDown
          label={'Month'}
          value={selectedMonth}
          onChange={value => setSelectedMonth(value)}
          data={months}
          borderWidth={1}
          borderColor={'#8B8B8B'}
          px={3}
          py={1}
          rounded={'full'}
          flexDir={'row'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={'auto'}
        />
      </HStack>

      <VStack space={4} py={4} bg="white" px={4} rounded={8}>
        <HStack justifyContent={'space-between'} w="full">
          <YAxis
            data={dataToShow.map(item => item.value)}
            contentInset={contentInset}
            svg={{
              fill: 'grey',
              fontSize: 8,
            }}
            numberOfTicks={10}
            formatLabel={value => value}
            style={{width: 30}}
          />
          <AreaChart
            style={{height: 210, width: '90%', paddingHorizontal: 2}}
            data={dataToShow?.map(item => item.value)}
            svg={{fill: '#1AE13A80'}}
            contentInset={{top: 20, bottom: 5}}>
            <Grid svg={{stroke: '#E8E9EB'}} />
            <Line />
            <Decorators />
          </AreaChart>
        </HStack>
        <XAxis
          data={dataToShow?.map((item, index) => item.label)}
          contentInset={{left: 20, right: 10}}
          svg={{fontSize: 8, fill: 'black'}}
          formatLabel={(value, index) => `W${index + 1}`}
        />
      </VStack>

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
