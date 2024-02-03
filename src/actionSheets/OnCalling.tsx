import React from 'react';
import {
  Button,
  FormControl,
  Input,
  Modal,
  Stack,
  Text,
  VStack,
} from 'native-base';

interface IProps {
  isOpen: boolean;
  callInfo: any;
  onClose: () => void;
}

export default function OnCalling({isOpen, onClose, callInfo}: IProps) {
  return (
    <Modal
      zIndex={99}
      isOpen={isOpen}
      onClose={onClose}
      animationPreset="slide">
      <Modal.Content w="100%" h="50%"></Modal.Content>
    </Modal>
  );
}
