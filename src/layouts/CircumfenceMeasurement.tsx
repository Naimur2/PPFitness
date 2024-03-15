import {AddIcon} from '@assets/icons';
import {
  useGetSingleProfileQuery,
  useGetUserCircumferencesQuery,
} from '@store/apis/userProfile';
import {selectAccessToken} from '@store/features/authSlice';
import {fontSizes} from '@theme/typography';
import dayjs from 'dayjs';
import {
  Actionsheet,
  Center,
  ChevronDownIcon,
  HStack,
  Text as NText,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import UpdateMeasurementsModal from 'src/actionSheets/UpdateMeasurements';
import DropDown from 'src/components/DropDown';

import {AreaChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import {Circle, Path} from 'react-native-svg';

const circumferenceKeys: Record<string, string> = {
  right: 'Right',
  left: 'Left',
  neck: 'Neck',
  bicep: 'Bicep',
  chest: 'Chest',
  waist: 'Waist',
  hip: 'Hip',
  leftQuad: 'Left Quad',
  rightQuad: 'Right Quad',
  leftCalf: 'Left Calf',
  rightCalf: 'Right Calf',
};

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

const bodyParts = [
  {
    label: 'Right',
    value: 'right',
  },
  {
    label: 'Left',
    value: 'left',
  },
  {
    label: 'Neck',
    value: 'neck',
  },
  {
    label: 'Bicep',
    value: 'bicep',
  },
  {
    label: 'Chest',
    value: 'chest',
  },
  {
    label: 'Waist',
    value: 'waist',
  },
  {
    label: 'Hip',
    value: 'hip',
  },
  {
    label: 'Left Quad',
    value: 'leftQuad',
  },
  {
    label: 'Right Quad',
    value: 'rightQuad',
  },
  {
    label: 'Left Calf',
    value: 'leftCalf',
  },
  {
    label: 'Right Calf',
    value: 'rightCalf',
  },
];

import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

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

export default function CircumfenceMeasurement() {
  const [selectedMonth, setSelectedMonth] = React.useState(months[0]);
  const [selectedBodyPart, setSelectedBodyPart] = React.useState(bodyParts[0]);

  const {data: profileData} = useGetUserCircumferencesQuery({
    month: selectedMonth.value,
    bodyPart: selectedBodyPart.value,
  });

  console.log('profileData', profileData);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const circumference = profileData?.data?.data?.slice().sort((a, b) => {
    return Number(a.week) - Number(b.week);
  });

  const dataToShow = React.useMemo(() => {
    const startOfWeek = dayjs()
      .set('month', selectedMonth.value - 1)
      .startOf('month')
      .week();
    const endOfWeek = dayjs()
      .set('month', selectedMonth.value - 1)
      .endOf('month')
      .week();

    const weeks: {label: string; value: string}[] = [];
    for (let week = startOfWeek; week < endOfWeek; week++) {
      const find = circumference?.find(item => item.week === week.toString());
      if (find) {
        weeks.push({label: 'W' + find.week, value: find.week});
      } else {
        weeks.push({label: 'W' + week.toString(), value: '0'});
      }
    }
    return weeks;
  }, [selectedMonth.value]);

  console.log('dataToShow', dataToShow);

  return (
    <VStack space={4}>
      <NText color={'#1A1929'} fontSize={fontSizes.md} fontWeight={700}>
        Circumference Measurements
      </NText>

      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        w="100%"
        space={4}>
        <DropDown
          label="Select Month"
          data={months}
          value={selectedMonth}
          onChange={value => {
            setSelectedMonth(value);
          }}
        />
        <DropDown
          label="Select Body Part"
          data={bodyParts}
          value={selectedBodyPart}
          onChange={value => {
            setSelectedBodyPart(value);
          }}
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
          data={dataToShow.map((item, index) => item.label)}
          contentInset={{left: 20, right: 10}}
          svg={{fontSize: 8, fill: 'black'}}
          formatLabel={(value, index) => `W${index + 1}`}
        />
      </VStack>

      <Pressable
        mx="auto"
        mt={6}
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
        onPress={() => setIsModalOpen(true)}>
        <AddIcon />
        <Text color="primary.100" fontSize="xs" fontWeight={700}>
          Update Measurements
        </Text>
      </Pressable>

      <UpdateMeasurementsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </VStack>
  );
}
