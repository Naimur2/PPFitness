import React from 'react';
import {Button, Modal, Text, VStack} from 'native-base';
import * as Yup from 'yup';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import dayjs from 'dayjs';
import {fontConfig} from '@theme/fontConfig';

interface IProps {
  value: string;
  isOpen: boolean;
  onClose: () => void;
  onSetValue?: (props: string) => void;
}

export default function CalenderPickerModal({
  isOpen,
  onClose,
  onSetValue,
  value,
}: IProps) {
  const [selectedDate, setSelectedDate] = React.useState(
    dayjs().format('YYYY-MM-DD'),
  );

  React.useEffect(() => {
    if (value) {
      setSelectedDate(value);
    }
  }, [value]);

  return (
    <Modal zIndex={99} isOpen={isOpen} onClose={onClose}>
      <Modal.Content w="90%" p={4} maxW="500px">
        <VStack space={4}>
          <Text fontSize="lg" fontWeight={700}>
            Select Date
          </Text>
          <Calendar
            onDayPress={day => {
              setSelectedDate(dayjs(day.dateString));
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
            current={selectedDate}
            theme={{
              textDayFontFamily: fontConfig.Outfit[400].normal,
              textMonthFontFamily: fontConfig.Outfit[400].normal,
              textDayHeaderFontFamily: fontConfig.Outfit[400].normal,
            }}
          />
          <Button
            bg={'#C7B4A0'}
            _pressed={{bg: '#C7B4A090'}}
            _text={{color: '#1A1929', fontWeight: 700}}
            onPress={() => {
              onSetValue?.(selectedDate);
              onClose();
            }}>
            Done
          </Button>
        </VStack>
      </Modal.Content>
    </Modal>
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
