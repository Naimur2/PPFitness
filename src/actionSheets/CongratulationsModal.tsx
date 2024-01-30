import React from 'react';
import {Modal, Text, VStack} from 'native-base';
import {fontSizes} from '@theme/typography';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CongratulationsIcon} from '@assets/icons';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CongratulationsModal({isOpen, onClose}: IProps) {
  return (
    <Modal zIndex={99} isOpen={isOpen} onClose={onClose}>
      <Modal.Content w="100%" h="50%">
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}>
          <VStack
            bg={'white'}
            py={4}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            h={'100%'}>
            <CongratulationsIcon width={100} height={100} />

            <Text
              fontSize={fontSizes.xl}
              fontWeight="bold"
              color="black"
              textAlign="center"
              pt={6}>
              Congratulations Patty!!
            </Text>
            <Text
              fontSize={fontSizes.sm}
              fontWeight="normal"
              color="gray.500"
              textAlign="center"
              pt={4}>
              Your workout successfully added.
            </Text>
          </VStack>
        </KeyboardAwareScrollView>
      </Modal.Content>
    </Modal>
  );
}
