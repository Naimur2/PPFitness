import React from 'react';
import {
  Button,
  Center,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {SearchIcon} from '@assets/icons';
import {fontSizes} from '@theme/typography';
import TableRow from 'src/components/TableRow';
import {useGetExerciseHistoryQuery} from '@store/apis/exercise';
import dayjs from 'dayjs';
import NotFoundCard from 'src/components/not-found-card';
import {SkeletonsExerciseItem} from 'src/components/skeletons';
import Header from 'src/components/headers/Header';
import CalendarPicker from 'react-native-calendar-picker';
import CalenderPickerModal from 'src/actionSheets/CalenderPickerModal';

export default function History() {
  const navigation = useNavigation();
  const [isOpenDatePicker, setIsOpenDatePicker] = React.useState(false);
  const [searchFilter, setSearchFilter] = React.useState({
    search: '',
    date: '',
  });
  // APIS
  const {data, isLoading, isFetching} =
    useGetExerciseHistoryQuery(searchFilter);
  const handelClear = () => {
    setSearchFilter({
      search: '',
      date: '',
    });
  };
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
      <Header
        title={'History'}
        onPress={() => setIsOpenDatePicker(true)}
        iconRightType="calender"
      />
      {/*  date picker */}
      <CalenderPickerModal
        isOpen={isOpenDatePicker}
        value={searchFilter?.date}
        onClose={() => setIsOpenDatePicker(false)}
        onSetValue={value => {
          console.log('value', value);

          setSearchFilter(prv => ({
            ...prv,
            date: value,
          }));
        }}
      />
      {/*  */}
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Input
          w={'80%'}
          bg="white"
          placeholder="Search Exercise"
          rounded={8}
          placeholderTextColor={'gray.2'}
          color={'black'}
          _focus={{bg: 'white'}}
          leftElement={<SearchIcon style={{marginLeft: 10}} />}
          backgroundColor={'white'}
          fontSize={fontSizes.xs}
          onChangeText={text =>
            setSearchFilter({...searchFilter, search: text})
          }
        />
        <Button onPress={handelClear} variant={'unstyled'}>
          Clear
        </Button>
      </HStack>

      {/* <HStack justifyContent={'space-between'} alignItems={'center'}>
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
          <Text color="black">Program</Text>
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
          <Text color="black">Exercise</Text>
          <ArrowUpIcon />
        </Pressable>
      </HStack> */}

      {isLoading || isFetching ? (
        <SkeletonsExerciseItem />
      ) : data?.data && data?.data?.data?.length > 0 ? (
        data?.data?.data?.map(item => {
          return (
            <VStack space={4}>
              <Text fontWeight={700} fontSize={fontSizes.md}>
                {dayjs(item?.date).format('MMMM DD,YYYY')}
              </Text>
              <VStack space={4} bg="white" p={3}>
                {item?.exercises?.map(exe => {
                  return (
                    <VStack space={2}>
                      <Text fontWeight={700} fontSize={fontSizes.sm}>
                        {exe?.exerciseId?.name}
                      </Text>
                      <TableRow
                        cols={[
                          {
                            key: 1,
                            title: 'Total Set',
                          },
                          {
                            key: 1,
                            title: 'Total Reps',
                          },
                          {
                            key: 1,
                            title: 'Top weight',
                          },
                        ]}
                        _containerStyle={{
                          backgroundColor: '#EFEEF4',
                          py: 4,
                        }}
                        _textStyle={{
                          fontWeight: 700,
                          fontSize: fontSizes.xs,
                        }}
                      />
                      <TableRow
                        cols={[
                          {
                            key: 1,
                            title: exe?.sets?.reduce((acc, curr) => {
                              return acc + parseInt(curr?.setNumber ?? '0');
                            }, 0),
                          },
                          {
                            key: 1,
                            title: `${exe?.sets?.reduce((acc, curr) => {
                              return acc + parseInt(curr?.reps ?? '0');
                            }, 0)}`,
                          },
                          {
                            key: 1,
                            title: `${exe?.sets?.reduce((acc, curr) => {
                              return acc + parseInt(curr?.weight ?? '0');
                            }, 0)} KG`,
                          },
                        ]}
                        _containerStyle={{
                          backgroundColor: '#F8F8F8',
                          py: 3,
                        }}
                        _textStyle={{
                          fontSize: fontSizes.xs,
                          color: '#7D7C81',
                        }}
                      />
                    </VStack>
                  );
                })}

                {/* 
              <Center mt={4}>
                <Pressable
                  borderWidth={1}
                  px={4}
                  py={3}
                  borderColor={'#68696B'}
                  rounded={9}
                  width={'100%'}
                  maxW={200}
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}>
                  <NoteIcon />
                  <Text
                    ml={2}
                    fontSize={fontSizes.xs}
                    fontWeight={700}
                    color={'#68696B'}>
                    Note
                  </Text>
                </Pressable>
              </Center> */}
              </VStack>
            </VStack>
          );
        })
      ) : (
        <NotFoundCard
          title="History was not found!"
          h={'full'}
          bg={'transparent'}
          borderWidth={0}
        />
      )}
    </ScrollView>
  );
}
