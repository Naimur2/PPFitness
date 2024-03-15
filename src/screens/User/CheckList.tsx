import {WorkoutNotFoundIcon} from '@assets/icons';
import {useNavigation} from '@react-navigation/native';
import {useGetCheckListByUserQuery} from '@store/apis/checklist';
import {selectAuth} from '@store/features/authSlice';
import {GetV1ChecklistUserSuccessfulResponse} from '@store/schema';
import {fontSizes} from '@theme/typography';
import dayjs from 'dayjs';
import {ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import ChecklistItem from 'src/components/ChecklistItem';
import { SkeletonsProgramList } from 'src/components/skeletons';

type TCheckList = GetV1ChecklistUserSuccessfulResponse['data']['data'][0];

export default function CheckList() {
  const {data, isLoading, error} = useGetCheckListByUserQuery(
    dayjs().format('dddd') as any,
  );

  const auth = useSelector(selectAuth);

  const navigate = useNavigation();

  if (isLoading) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
          bg: 'bg',
          px: 4,
          py: 4,
          flexGrow: 1,
          gap: 4,
          bgColor: '#F8F8F8',
        }}>
        <SkeletonsProgramList />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
        bgColor: '#F8F8F8',
      }}>
      <Text
        fontWeight={700}
        color={'#1A1929'}
        fontSize={fontSizes.md}
        mb={4}
        textAlign={'center'}>
        {dayjs().format('dddd, MMMM D, YYYY')}
      </Text>
      {data?.data?.data?.map((item, index) => {
        const isComplete = item?.submissions?.findIndex(
          item =>
            item?.user?._id === auth?.user?._id &&
            dayjs(item?.date).isSame(dayjs(), 'day'),
        );

        return (
          <ChecklistItem
            isComplete={isComplete !== -1 ? true : false}
            onPress={() => {
              navigate.navigate('UpdateCheckList', {id: item._id});
            }}
            subTitle={item.description}
            title={item.title}
          />
        );
      })}

      {data?.data?.data?.length === 0 ? (
        <VStack justifyContent={'center'} alignItems={'center'} flexGrow={1}>
          <WorkoutNotFoundIcon width={100} height={100} />
          <Text fontWeight={700} fontSize={fontSizes.xs}>
            No Checklist Found for Today
          </Text>
        </VStack>
      ) : null}
    </ScrollView>
  );
}
