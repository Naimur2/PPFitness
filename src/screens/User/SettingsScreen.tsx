import React from 'react';
import {HStack, Pressable, ScrollView, Text, VStack} from 'native-base';
import {
  ArrowDownIcon,
  Bell,
  LockV2,
  LogoutIcon,
  ProfileRound,
  Settings,
  Sheild,
  Support,
} from '@assets/icons';
import {fontSizes} from '@theme/typography';
import useNavigate from '@hooks/useNavigate';
import {logout, selectFcmTokenId} from '@store/features/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '@store/apis/auth';
import {useDeleteFcmTokenMutation} from '@store/apis/notification';

const tabItems = [
  {
    label: 'Edit Profile',
    icon: ProfileRound,
    nav: 'EditProfile',
  },
  {
    label: 'Change Password',
    icon: LockV2,
    nav: 'ChangePassword',
  },
  {
    label: 'Notification Preference',
    icon: Bell,
    nav: 'NotificationPreference',
  },
  {
    label: 'Account Management',
    icon: Settings,
    nav: 'SettingsScreen',
  },
  {
    label: 'Privacy & Security',
    icon: Sheild,
    nav: 'PrivacySecurity',
  },
  {
    label: 'Help & Support',
    icon: Support,
    nav: 'HelpSupport',
  },
  {
    label: 'Logout',
    icon: LogoutIcon,
    nav: 'logout',
  },
];

export default function SettingsScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fcmId = useSelector(selectFcmTokenId);
  // APIS
  const [handelFcmDelete] = useDeleteFcmTokenMutation();
  // admin@ppfitness.com
  const handelLogout = async () => {
    try {
      if (fcmId) {
        const res = await handelFcmDelete(fcmId).unwrap();
      }
      dispatch(logout());
    } catch (error) {
      dispatch(logout());
    }
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
          onPress={() =>
            item?.nav !== 'logout' ? navigate(item?.nav) : handelLogout()
          }
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
