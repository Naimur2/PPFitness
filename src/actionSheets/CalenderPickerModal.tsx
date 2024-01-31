import React from 'react';
import {Modal} from 'native-base';
import * as Yup from 'yup';
import {Calendar, LocaleConfig} from 'react-native-calendars';

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
  return (
    <Modal zIndex={99} isOpen={isOpen} onClose={onClose}>
      <Modal.Content w="100%" h="50%">
        <Calendar
          onDayPress={day => {
            onSetValue?.(day.dateString);
          }}
          markedDates={{
            [value]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
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
