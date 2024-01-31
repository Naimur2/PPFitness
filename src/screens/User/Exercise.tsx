import React from 'react';
import {
  Box,
  Button,
  CheckIcon,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Select,
  Text,
} from 'native-base';
import ExerciseItem from 'src/components/exercise/ExerciseItem';
import {useNavigation} from '@react-navigation/native';
import {AddIcon, ArrowDownIcon, ArrowUpIcon, SearchIcon} from '@assets/icons';
import NewExercise from 'src/actionSheets/NewExercise';
import {fontSizes} from '@theme/typography';
import {useGetAllExerciseQuery} from '@store/apis/exercise';
import {SkeletonsExerciseItem} from 'src/components/skeletons';
import NotFoundCard from 'src/components/not-found-card';

export default function Exercise() {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchFilter, setSearchFilter] = React.useState({
    search: '',
    bodyPart: '',
    equipment: '',
  });

  // apis
  const {data, isFetching, isLoading} = useGetAllExerciseQuery(searchFilter);
  //
  const handelClear = () => {
    setSearchFilter({
      search: '',
      bodyPart: '',
      equipment: '',
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

      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Box w={'48%'}>
          <Select
            selectedValue={searchFilter.bodyPart}
            accessibilityLabel="Body Part"
            placeholder="Select Body Part"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            borderColor={'gray.200'}
            onValueChange={itemValue => {
              setSearchFilter({...searchFilter, bodyPart: itemValue});
            }}>
            {bodyPartData?.map(v => {
              return <Select.Item label={v?.name} value={v?.name} />;
            })}
          </Select>
        </Box>
        <Box w={'48%'}>
          <Select
            selectedValue={searchFilter?.equipment}
            accessibilityLabel="Equipment"
            placeholder="Select Equipment"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            borderColor={'gray.200'}
            onValueChange={itemValue => {
              setSearchFilter({...searchFilter, equipment: itemValue});
            }}>
            {equipmentData?.map(v => {
              return <Select.Item label={v?.name} value={v?.name} />;
            })}
          </Select>
        </Box>
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

      {isLoading || isFetching ? (
        <SkeletonsExerciseItem />
      ) : (
        <>
          {data?.data && data?.data?.data?.length > 0 ? (
            <ExerciseItem
              title=""
              items={data?.data?.data || []}
              onPress={id =>
                navigation.navigate('ExerciseDetails', {id: 'dddd'})
              }
            />
          ) : (
            <NotFoundCard
              title="Exercise not found!"
              h={'2/3'}
              bg={'transparent'}
              borderWidth={0}
            />
          )}
        </>
      )}

      <NewExercise
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </ScrollView>
  );
}

const bodyPartData = [
  {id: 1, name: 'Arms'},
  {id: 2, name: 'Legs'},
  {id: 3, name: 'Chest'},
  {id: 4, name: 'Back'},
  {id: 5, name: 'Abs'},
  {id: 6, name: 'Shoulders'},
  {id: 7, name: 'Glutes'},
  {id: 8, name: 'Quads'},
  {id: 9, name: 'Hamstrings'},
  {id: 10, name: 'Calves'},
  {id: 11, name: 'Core'},
  {id: 12, name: 'Triceps'},
  {id: 13, name: 'Biceps'},
  {id: 14, name: 'Obliques'},
  {id: 15, name: 'Forearms'},
];

const equipmentData = [
  {id: 1, name: 'Dumbbells'},
  {id: 2, name: 'Barbell'},
  {id: 3, name: 'Resistance Bands'},
  {id: 4, name: 'Kettlebell'},
  {id: 5, name: 'Medicine Ball'},
  {id: 6, name: 'Smith Machine'},
  {id: 7, name: 'Pull-up Bar'},
  {id: 8, name: 'Rowing Machine'},
  {id: 9, name: 'TRX Suspension Trainer'},
  {id: 10, name: 'Elliptical Trainer'},
  {id: 11, name: 'Stationary Bike'},
  {id: 12, name: 'Battle Ropes'},
  {id: 13, name: 'Pilates Ball'},
  {id: 14, name: 'Step Platform'},
  {id: 15, name: 'Gymnastic Rings'},
];
