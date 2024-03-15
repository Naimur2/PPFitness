import {fontSizes} from '@theme/typography';
import {
  HStack,
  VStack,
  Text as NText,
  View,
  Box,
  Pressable,
  Actionsheet,
  ScrollView,
} from 'native-base';
import {Circle, G, Line, Path, Text} from 'react-native-svg';
import {
  AreaChart,
  BarChart,
  Grid,
  PieChart,
  XAxis,
  YAxis,
} from 'react-native-svg-charts';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGetAllMealPlanQuery} from '@store/apis/mealPlan';
import {ArrowDownIcon} from '@assets/icons';

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

const Labels = ({slices}) => {
  return slices.map((slice, index) => {
    const {labelCentroid, pieCentroid, data} = slice;
    return (
      <G key={index}>
        <Line
          x1={labelCentroid[0]}
          y1={labelCentroid[1]}
          x2={pieCentroid[0]}
          y2={pieCentroid[1]}
          stroke={'#fff'}
        />
        <Circle
          cx={labelCentroid[0]}
          cy={labelCentroid[1]}
          r={30}
          fill={'#ffffff50'}
        />
        <Circle
          cx={labelCentroid[0]}
          cy={labelCentroid[1]}
          r={20}
          fill={'#ffffff'}
        />

        <Text
          x={labelCentroid[0]}
          y={labelCentroid[1]}
          fill={'#1A1929'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={8}
          fontWeight={700}>
          {data.value}%
        </Text>
      </G>
    );
  });
};

const Decorator = ({x, y, data}) => {
  return data.map((value, index) => (
    <Circle
      key={index}
      cx={x(index)}
      cy={y(value)}
      r={3}
      stroke={'#1AE13A'}
      fill={'white'}
    />
  ));
};

const LineComp = ({line}) => <Path d={line} stroke={'#1AE13A'} fill={'none'} />;
const contentInset = {top: 20, bottom: 0, left: 15};

export default function DailyMacroChart() {
  const [selectedSlice, setSelectedSlice] = useState({
    label: '',
    value: 0,
  });
  const [activeTab, setActiveTab] = React.useState('Sunday');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  // APIS
  const {data, isLoading, isFetching} = useGetAllMealPlanQuery(activeTab);

  const {label, value} = selectedSlice;
  // const keys = ['google', 'facebook', 'linkedin'];
  // const values = [15, 25, 35];
  // const colors = ['#FFC857', '#F39479', '#2A9BCE'];
  const dailyMacroData = data?.data?.data?.dailyMacro;
  const defaultColors = [
    '#FFC857',
    '#F39479',
    '#2A9BCE',
    '#ffc757cc',
    '#f39379cb',
    '#2A9BCE',
    '#b18121',
    '#aa6754',
    '#59c3f3',
  ];
  const keys = dailyMacroData?.map(item => item.name) ?? [];
  const values = dailyMacroData?.map(item => item.quantity) ?? [];

  const dataToShow =
    dailyMacroData?.map(item => {
      return {
        label: item.name,
        value: item.quantity,
      };
    }) ?? [];

    console.log('dataToShow', dataToShow);

  // Assigning
  const colors =
    dailyMacroData?.map(
      (item, index) => defaultColors[index % defaultColors.length],
    ) ?? [];

  // console.log('keys', keys);
  // console.log('values', values);
  // console.log('colors', colors);
  // demo data
  const demoData = keys.map((key, index) => {
    return {
      key,
      value: values[index],
      svg: {fill: colors[index]},
      arc: {
        outerRadius: 70 + values[index] + '%',
        padAngle: label === key ? 0.1 : 0,
      },
      onPress: () => setSelectedSlice({label: key, value: values[index]}),
    };
  });

  return (
    <VStack space={4} mt={4}>
      <NText color={'#1A1929'} fontSize={fontSizes.lg} fontWeight={700}>
        Daily Macros
      </NText>

      <VStack bg={'white'} rounded={'xl'} px={4} py={4} space={4}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <HStack space={2} alignItems={'center'}>
            <NText color={'#1A1929'} fontSize={fontSizes.xs}>
              Total
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
              {activeTab}
            </NText>
            <ArrowDownIcon height={12} width={12} color={'#8B8B8B'} />
          </Pressable>
        </HStack>
        {/* <View style={{justifyContent: 'center'}} position={'relative'}>
          <PieChart
            style={{height: 250}}
            outerRadius={'80%'}
            innerRadius={'45%'}
            data={demoData}>
            <Labels />
            <VStack
              position={'absolute'}
              justifyContent={'center'}
              alignItems={'center'}
              width={'100%'}
              height={'100%'}
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={-1}
              space={4}>
              <NText textTransform={'capitalize'} backgroundColor={'#ccc'}>
                {label} {value}%
              </NText>
            </VStack>
          </PieChart>
        </View> */}

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
              <LineComp />
              <Decorator />
            </AreaChart>
          </HStack>
          <XAxis
            data={dataToShow.map((item, index) => item.label)}
            contentInset={{left: 20, right: 10}}
            svg={{fontSize: 8, fill: 'black'}}
            formatLabel={(value, index) => dataToShow[index]?.label}
          />
        </VStack>

        {/*  bottom list */}
        {/* <HStack
          justifyContent={'center'}
          alignItems={'center'}
          flexWrap={'wrap'}
          space={8}>
          {dailyMacroData?.map((item, index) => (
            <HStack space={2} alignItems={'center'}>
              <Box bg={defaultColors?.[index]} w={2} h={2} rounded={'full'} />
              <NText
                textTransform={'capitalize'}
                fontSize={fontSizes.xs}
                color={'#1A1929'}>
                {item?.name}
              </NText>
            </HStack>
          ))}
        </HStack> */}
      </VStack>

      {/* day list */}
      <Actionsheet
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}>
        <Actionsheet.Content py={4}>
          <ScrollView w="full" showsVerticalScrollIndicator={false}>
            {dayTabs.map((item, index) => (
              <Actionsheet.Item
                key={index}
                onPress={() => {
                  setActiveTab(item?.key);
                  setIsDropdownOpen(false);
                }}>
                {item.key}
              </Actionsheet.Item>
            ))}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </VStack>
  );
}
