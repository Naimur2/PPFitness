import React from 'react';
import {HStack, Pressable, ScrollView, Text, VStack} from 'native-base';
import {
  ArrowDownIcon,
  Bell,
  LockV2,
  ProfileRound,
  Settings,
  Sheild,
  Support,
} from '@assets/icons';
import {fontSizes} from '@theme/typography';

const tabItems = [
  {
    label: 'Edit Profile',
    icon: ProfileRound,
  },
  {
    label: 'Change Password',
    icon: LockV2,
  },
  {
    label: 'Notification Preference',
    icon: Bell,
  },
  {
    label: 'Account Management',
    icon: Settings,
  },
  {
    label: 'Privacy & Security',
    icon: Sheild,
  },
  {
    label: 'Help & Support',
    icon: Support,
  },
];

export default function SettingsScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
        bgColor: '#F8F8F8',
      }}>
      {tabItems.map((item, index) => (
        <Pressable
          key={index}
          w="100%"
          bg="white"
          px={4}
          py={4}
          rounded="xl"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          onPress={() => console.log('Pressed')}
          _pressed={{bg: 'gray.100'}}>
          <HStack space={4}>
            <item.icon />
            <VStack alignItems="flex-start" justifyContent="center" gap={2}>
              <Text fontSize={fontSizes.sm} color="#1A1929">
                {item.label}
              </Text>
            </VStack>
          </HStack>
          <ArrowDownIcon style={{transform: [{rotate: '-90deg'}]}} />
        </Pressable>
      ))}
    </ScrollView>
  );
}
