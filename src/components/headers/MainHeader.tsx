import {CalenderIcon, ListBucketIcon, Settings} from '@assets/icons';
import {HStack, Image, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function MainHeader({
  title,
  type,
  onPress,
  iconRightType = 'setting',
}: {
  title?: string;
  type?: string;
  iconRightType?: 'setting' | 'listBucket' | 'calender';
  onPress?: () => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <HStack
      paddingX={4}
      justifyContent={'space-between'}
      alignItems={'center'}
      height={60 + insets.top + 'px'}
      bg={'white'}
      pt={insets.top + 'px'}>
      <Image
        source={require('@assets/images/logo.png')}
        alt="logo"
        height={8}
        width={8}
      />
      <Text fontSize={20} fontWeight={'700'}>
        {title}
      </Text>

      <TouchableOpacity onPress={onPress}>
        {onPress &&
          (iconRightType === 'setting' ? (
            <Settings />
          ) : iconRightType === 'calender' ? (
            <CalenderIcon />
          ) : (
            <ListBucketIcon />
          ))}
      </TouchableOpacity>
    </HStack>
  );
}
