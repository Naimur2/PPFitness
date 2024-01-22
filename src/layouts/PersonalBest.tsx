import {GetV1ExerciseGetIdSuccessfulResponse} from '@store/schema';
import dayjs from 'dayjs';
import {Text, VStack} from 'native-base';
import React from 'react';
import TableRow from 'src/components/TableRow';
interface Props {
  data: GetV1ExerciseGetIdSuccessfulResponse['data']['data'];
}
export default function PersonalBest({data}: Props) {
  return (
    <VStack space={4} mt={5}>
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
            title: 'Reps',
            key: 'Reps',
          },
          {
            title: 'Date',
            key: 'Date',
          },
          {
            title: 'Max Weight',
            key: 'Max Weight',
          },
        ]}
      />
      {data?.map(item => {
        return (
          <VStack space="3">
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
                          title: set?.reps,
                        },
                        {
                          title: dayjs(item?.date).format('MMMM DD,YYYY'),
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
