import {
  GetV1ExerciseGetIdSuccessfulResponse,
  GetV1ExerciseHistoryIdSuccessfulResponse,
} from '@store/schema';
import {Text, VStack} from 'native-base';
import React from 'react';
import TableRow from 'src/components/TableRow';
import dayjs from 'dayjs';

interface Props {
  data: GetV1ExerciseHistoryIdSuccessfulResponse['data']['data'];
}
export default function ExerciseHistory({data}: Props) {
  return (
    <VStack space={4}>
      {data?.map(item => {
        return (
          <VStack space="3" mt={5}>
            <Text fontWeight={700} fontSize="lg" color="black">
              {dayjs(item?.date).format('MMMM DD,YYYY')}
            </Text>
            <TableRow
              _containerStyle={{
                bg: '#EFEEF4',
                py: 2,
              }}
              _textStyle={{
                color: '#58565E',
                fontSize: 'sm',
                fontWeight: 700,
              }}
              cols={[
                {
                  title: 'Sets',
                  key: 'Sets',
                },
                {
                  title: 'Reps',
                  key: 'Reps',
                },
                {
                  title: 'Weight',
                  key: 'Weight',
                },
              ]}
            />
            {item?.exercises?.map(ex => {
              return (
                <VStack space="4">
                  <TableRow
                    _containerStyle={{
                      bg: 'white',
                      py: 2,
                    }}
                    _textStyle={{
                      color: '#7D7C81',
                      fontSize: 'sm',
                    }}
                    cols={ex?.sets?.map(set => {
                      return [
                        {
                          title: set?.time,
                        },
                        {
                          title: set?.reps,
                        },
                        {
                          title: `${set?.weight}kg`,
                        },
                      ];
                    })}
                  />
                </VStack>
              );
            })}
          </VStack>
        );
      })}
    </VStack>
  );
}
