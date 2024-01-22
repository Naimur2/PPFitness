import React from 'react';
import {HStack, Input, Pressable, ScrollView, Text} from 'native-base';
import ExerciseItem from 'src/components/exercise/ExerciseItem';
import {useNavigation} from '@react-navigation/native';
import {AddIcon, ArrowDownIcon, ArrowUpIcon, SearchIcon} from '@assets/icons';
import NewExercise from 'src/actionSheets/NewExercise';
import {fontSizes} from '@theme/typography';
import {useGetAllExerciseQuery} from '@store/apis/exercise';

export default function Exercise() {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  // apis
  const {data, error} = useGetAllExerciseQuery();
  //
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
      }}>
      <Input
        bg="white"
        placeholder="Search Exercise"
        rounded={8}
        placeholderTextColor={'gray.2'}
        color={'black'}
        _focus={{bg: 'white'}}
        leftElement={<SearchIcon style={{marginLeft: 10}} />}
        backgroundColor={'white'}
        fontSize={fontSizes.xs}
      />

      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Pressable
          w="48%"
          bg="white"
          px={2}
          py={2}
          rounded="xl"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={2}>
          <Text color="black">Body Part</Text>
          <ArrowDownIcon />
        </Pressable>
        <Pressable
          w="48%"
          bg="white"
          px={2}
          py={2}
          rounded="xl"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={2}>
          <Text color="black">Body Part</Text>
          <ArrowUpIcon />
        </Pressable>
      </HStack>

      <Pressable
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        borderRadius={8}
        borderWidth={1}
        borderColor="primary.100"
        bg="white"
        py={2}
        onPress={() => setIsOpen(true)}>
        <AddIcon />
        <Text color="primary.100" fontSize="sm" fontWeight={700}>
          New Exercise
        </Text>
      </Pressable>

      <ExerciseItem
        title="B"
        items={data?.data?.data || []}
        onPress={id => navigation.navigate('ExerciseDetails', {id: 'dddd'})}
      />
      <NewExercise
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </ScrollView>
  );
}
