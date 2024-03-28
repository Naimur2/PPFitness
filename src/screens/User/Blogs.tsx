import {useNavigation} from '@react-navigation/native';
import {useGetAllBlogsQuery} from '@store/apis/blogs';
import {FlatList} from 'native-base';
import React from 'react';
import BlogCard from 'src/components/blog/BlogCard';
import {SkeletonsBlogCard} from 'src/components/skeletons';

export default function Blogs() {
  // Hooks
  const navigation = useNavigation();

  //  APIS
  const {data, isLoading} = useGetAllBlogsQuery(null);
  //
  return (
    <FlatList
      data={data?.data?.blogs || []}
      renderItem={({item}) => {
        return (
          <BlogCard
            onPress={() =>
              navigation.navigate('BlogDetails', {
                item: item,
              })
            }
            {...item}
          />
        );
      }}
      keyExtractor={item => item?._id}
      _contentContainerStyle={{
        px: 4,
        py: 8,
        gap: 8,
        bg: '#F7F7F7',
      }}
      ListEmptyComponent={
        isLoading ? (
          <>
            <SkeletonsBlogCard />
            <SkeletonsBlogCard />
            <SkeletonsBlogCard />
            <SkeletonsBlogCard />
          </>
        ) : (
          <></>
        )
      }
    />
  );
}
