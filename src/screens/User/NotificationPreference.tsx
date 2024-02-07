import React from 'react';
import {useGetNotificationQuery} from '@store/apis/notification';
import {FlatList, VStack, Text} from 'native-base';
import {GetV1NotificationGetSuccessfulResponse} from '@store/schema';
import {SkeletonsNotification} from 'src/components/skeletons';
import NotFoundCard from 'src/components/not-found-card';

type ItemProps = {
  item: GetV1NotificationGetSuccessfulResponse['data']['data'][0];
};

export default function NotificationPreference() {
  // APIS
  const {data, isLoading, isFetching} = useGetNotificationQuery();

  // renderItem
  const RenderItem = ({item}: ItemProps) => {
    return (
      <VStack bg={'white'} p={2} rounded={'md'}>
        <Text fontWeight={600} color="gray.900">
          {item?.title}
        </Text>
        <Text color="gray.400">{item?.body}</Text>
      </VStack>
    );
  };
  // data?.data?.data
  return (
    <VStack px={3} pt={4}>
      <FlatList
        data={data?.data?.data}
        keyExtractor={item => item?._id}
        renderItem={RenderItem}
        contentContainerStyle={{
          gap: 10,
        }}
        ListEmptyComponent={
          isFetching || isLoading ? (
            <>
              <SkeletonsNotification />
              <SkeletonsNotification />
              <SkeletonsNotification />
              <SkeletonsNotification />
              <SkeletonsNotification />
            </>
          ) : (
            <NotFoundCard title="No notification found" />
          )
        }
      />
    </VStack>
  );
}
