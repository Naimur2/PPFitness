import React from 'react';
import {
  DeleteIcon,
  HStack,
  Modal,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
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
import {logout, selectFcmTokenId, selectUser} from '@store/features/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useDeleteAccountMutation, useLoginMutation} from '@store/apis/auth';
import {useDeleteFcmTokenMutation} from '@store/apis/notification';
import {Alert} from 'react-native';
import useShowToastMessage from '@hooks/useShowToastMessage';

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
  // {
  //   label: 'Account Management',
  //   icon: Settings,
  //   nav: 'SettingsScreen',
  // },
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
  {
    label: 'Delete Your Account',
    icon: LogoutIcon,
    nav: 'delete',
  },
];

export default function SettingsScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);
  const fcmId = useSelector(selectFcmTokenId);
  const toast = useShowToastMessage();
  // APIS
  const [handelFcmDelete, handelFcmDeleteRes] = useDeleteFcmTokenMutation();
  const [handelAccountDelete] = useDeleteAccountMutation();
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
  // handelDeleteAccount

  const handelDeleteAccount = async () => {
    // Show a confirmation dialog
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            console.log('Account deletion canceled by the user.');
          },
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              const res = await handelAccountDelete({
                email: authUser?.email,
              }).unwrap();
              console.log('res', res);
              toast(res.data?.message);
            } catch (error: any) {
              console.error('Error deleting account:', error);
              toast(error?.data?.error?.message, 'error');
            }
          },
        },
      ],
    );
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
          bg={item?.nav === 'delete' ? '#ff7c7c39' : 'white'}
          px={4}
          py={4}
          rounded="xl"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          isDisabled={handelFcmDeleteRes.isLoading}
          onPress={() =>
            item?.nav === 'logout'
              ? handelLogout()
              : item?.nav === 'delete'
              ? handelDeleteAccount()
              : navigate(item?.nav)
          }
          _pressed={{bg: 'gray.100'}}>
          <HStack space={4}>
            {item?.nav === 'delete' ? (
              <DeleteIcon size={6} color={'#cd07079b'} />
            ) : (
              <item.icon />
            )}

            <VStack alignItems="flex-start" justifyContent="center" gap={2}>
              <Text fontSize={fontSizes.sm} color="#1A1929">
                {item.label}
              </Text>
            </VStack>
          </HStack>
          <ArrowDownIcon style={{transform: [{rotate: '-90deg'}]}} />
        </Pressable>
      ))}
      <Modal isOpen={handelFcmDeleteRes.isLoading} onClose={() => {}}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Logging out</Modal.Header>
          <Modal.Body>
            <Text>Logging out...</Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </ScrollView>
  );
}
