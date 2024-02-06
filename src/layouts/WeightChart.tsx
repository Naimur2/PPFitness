import React from 'react';
import {AreaChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import {Circle, Path} from 'react-native-svg';
import {
  Actionsheet,
  Box,
  HStack,
  Text as NText,
  Pressable,
  ScrollView,
  VStack,
} from 'native-base';
import {fontSizes} from '@theme/typography';
import {AddIcon, ArrowDownIcon} from '@assets/icons';
import UpdateWeightModal from 'src/actionSheets/UpdateWeightModal';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

import {useGetUserWeightsQuery} from '@store/apis/userProfile';

export default function WeightChart() {
  const [month, setMonth] = React.useState({
    label: dayjs().format('MMMM'),
    value: dayjs().month() + 1,
  });

  const year = dayjs().format('YYYY');

  const {data: weightRes} = useGetUserWeightsQuery({
    year: year,
    month: month.label,
  });

  console.log('weightRes', JSON.stringify(weightRes));

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const Decorator = ({x, y, data}) => {
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

  const contentInset = {top: 20, bottom: 5, left: 20};

  const monthsOfAYear = React.useMemo(() => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      const month = dayjs()
        .month(i - 1)
        .format('MMMM');

      months.push({
        label: month,
        value: i,
      });
    }
    return months;
  }, []);

  const arrayOfWeeksOfThisMonth = React.useMemo(() => {
    const date = `${year}-${month.value}-01`;
    const weeks = [];
    const daysInMonth = dayjs(date).daysInMonth();
    let week = 1;
    for (let i = 1; i <= daysInMonth; i++) {
      if (i % 7 === 0) {
        const cal = weightRes?.data?.data?.find(
          item => item.week === week.toString(),
        )?.weight;
        weeks.push({
          label: `Week ${week}`,
          value: parseInt(cal) || 0,
        });
        week++;
      }
    }
    return weeks;
  }, [month.value, year]);

  return (
    <VStack space={4} py={4}>
      <NText color={'#1A1929'} fontSize={fontSizes.lg} fontWeight={700}>
        Weight
      </NText>
      <VStack space={4} py={4} bg="white" px={4} rounded={8}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <HStack space={2} alignItems={'center'}>
            <Box h={4} w={4} bg="#1AE13A" rounded={4} />
            <NText color={'#1A1929'} fontSize={fontSizes.xs}>
              KG
            </NText>
          </HStack>
          <Pressable
            onPress={() => setIsDropdownOpen(true)}
            px={3}
            py={1}
            rounded={16}
            borderWidth={1}
            borderColor="#8B8B8B"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center">
            <NText color={'#8B8B8B'} fontSize={fontSizes.xs} mr={2}>
              {month.label}
            </NText>

            <ArrowDownIcon height={12} width={12} color={'#8B8B8B'} />
          </Pressable>
        </HStack>
        <HStack justifyContent={'space-between'} w="full">
          <YAxis
            data={arrayOfWeeksOfThisMonth.map(item => item.value)}
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
            data={arrayOfWeeksOfThisMonth?.map(item => item.value)}
            svg={{fill: '#1AE13A80'}}
            contentInset={{top: 20, bottom: 5}}>
            <Grid svg={{stroke: '#E8E9EB'}} />
            <Line />
            <Decorator />
          </AreaChart>
        </HStack>
        <XAxis
          data={arrayOfWeeksOfThisMonth.map((item, index) => item.label)}
          contentInset={{left: 10, right: 10}}
          svg={{fontSize: 8, fill: 'black'}}
          formatLabel={(value, index) => `W${index + 1}`}
        />

        <Pressable
          mt={4}
          w="56%"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          borderRadius={8}
          borderWidth={2}
          borderColor="primary.100"
          py={2}
          mx="auto"
          onPress={() => setIsModalOpen(true)}>
          <AddIcon />
          <NText color="primary.100" fontSize="xs" fontWeight={700}>
            Update Weight
          </NText>
        </Pressable>
      </VStack>
      <UpdateWeightModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Actionsheet
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}>
        <Actionsheet.Content py={4}>
          <ScrollView w="full" showsVerticalScrollIndicator={false}>
            {monthsOfAYear.map((item, index) => (
              <Actionsheet.Item
                key={index}
                onPress={() => {
                  setMonth(item);
                  setIsDropdownOpen(false);
                }}>
                {item.label}
              </Actionsheet.Item>
            ))}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </VStack>
  );
}
