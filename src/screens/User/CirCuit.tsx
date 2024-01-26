import {AddIcon} from '@assets/icons';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useRoute} from '@react-navigation/native';
import {useUpdateExerciseMutation} from '@store/apis/exercise';
import {useUpdateWorkoutMutation} from '@store/apis/workout';
import {Button, Pressable, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import AddNote from 'src/actionSheets/AddNote';

export default function CirCuit() {
  const {item} = useRoute().params;
  // State
  const [isOpenNote, setIsOpenNote] = React.useState(false);
  const [isNotes, setNotes] = React.useState<string>();

  // hooks
  const toast = useShowToastMessage();

  // APIS
  const [updateWorkout, {isLoading}] = useUpdateWorkoutMutation();

  // handel
  const handelUpdateNotes = async () => {
    const props = {
      id: item?.exerciseId?._id,
      body: {
        note: [...item?.notes, isNotes],
        sets: [...item?.sets],
      },
    };
    try {
      const res = await updateWorkout(props).unwrap();
      setIsOpenNote(prv => !prv);
      toast(res?.data?.message);
    } catch (error) {
      setIsOpenNote(prv => !prv);
      toast(error?.data?.error?.message, 'error');
    }
  };
  const handelComplete = async () => {
    const props = {
      id: item?.exerciseId?._id,
      body: {
        note: [...item?.notes],
        sets: [...item?.sets],
        complete: true,
      },
    };
    try {
      const res = await updateWorkout(props).unwrap();
      toast(res?.data?.message);
    } catch (error) {
      toast(error?.data?.error?.message, 'error');
    }
  };
  //
  // console.log('item', item?.notes);

  return (
    <>
      <AddNote
        onPress={handelUpdateNotes}
        isOpen={isOpenNote}
        onClose={() => {
          setIsOpenNote(prv => !prv);
        }}
        onSetValue={props => {
          setNotes(props);
        }}
        isLoading={isLoading}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
          bg: 'bg',
          px: 4,
          py: 4,
          flexGrow: 1,
          gap: 6,
          bgColor: 'gray.100',
          justifyContent: 'space-between',
        }}>
        <VStack space={3}>
          <Text color="gray.2">{item?.exerciseId?.instruction}</Text>
        </VStack>

        <VStack space={4} mt={5}>
          <Button
            w="full"
            bg={'#68696B'}
            rounded={8}
            py={3}
            _text={{color: 'white', fontWeight: 700}}
            _pressed={{bg: '#68696B90'}}
            onPress={handelComplete}
            isLoading={isLoading}>
            Complete
          </Button>

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
            onPress={() => setIsOpenNote(prv => !prv)}>
            <AddIcon />
            <Text color="primary.100" fontSize="sm" fontWeight={700}>
              Edit Notes
            </Text>
          </Pressable>
        </VStack>
      </ScrollView>
    </>
  );
}
