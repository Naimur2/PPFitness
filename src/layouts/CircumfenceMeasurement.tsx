import { AddIcon } from '@assets/icons';
import { useGetSingleProfileQuery } from '@store/apis/userProfile';
import { fontSizes } from '@theme/typography';
import {
  Center,
  HStack,
  Text as NText,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts';
import UpdateMeasurementsModal from 'src/actionSheets/UpdateMeasurements';

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

export default function CircumfenceMeasurement() {
  const {data: profileData} = useGetSingleProfileQuery();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const circumference = profileData?.data?.data?.circumferences || [];

  const dataToDisplay = React.useMemo(() => {
    return Object.keys(circumferenceKeys).map(key => {
      return {
        name: circumferenceKeys[key],
        value: parseInt(
          circumference?.find(item => item.key === key)?.value || 0,
        ),
      };
    });
  }, [circumference]);

  const dataForChart = dataToDisplay.map(item => item.value);
  const labelsForChart = dataToDisplay.map(item => item.name);

  const maximumCircumference = React.useMemo(() => {
    return dataForChart?.reduce((acc, curr) => {
      return acc > curr ? acc : curr;
    }, 0);
  }, [dataForChart]);

  const minimumCircumference = React.useMemo(() => {
    return dataForChart?.reduce((acc, curr) => {
      return acc < curr ? acc : curr;
    }, 0);
  }, [dataForChart]);

  console.log(dataForChart);

  return (
    <VStack space={4}>
      <NText color={'#1A1929'} fontSize={fontSizes.lg} fontWeight={700}>
        Circumference Measurements
      </NText>
      <Center bg={'white'} p={4} rounded={8}>
        <HStack justifyContent={'space-between'}>
          <YAxis
            data={dataForChart}
            contentInset={{
              top: 15,
              bottom: 25,
              
            }}
            min={minimumCircumference || 0}
            max={maximumCircumference || 100}
            svg={{
              fill: 'grey',
              fontSize: 8,
            }}
            style={{width: 35}}
            numberOfTicks={dataForChart.length}
            formatLabel={value => `${value}`}
          />
          <VStack w="90%">
            <BarChart
              data={dataForChart}
              gridMin={0}
              svg={{fill: '#FFC857'}}
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
              data={labelsForChart}
              contentInset={{left: 5, right: 20}}
              svg={{fontSize: 5, fill: 'black'}}
              formatLabel={(value, index) => labelsForChart[index]}
            />
          </VStack>
        </HStack>
        <Pressable
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
      </Center>
      <UpdateMeasurementsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </VStack>
  );
}
