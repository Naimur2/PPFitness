import {
  CalenderIcon,
  CallFillIcon,
  CheckListIcon,
  ListBucketIcon,
  Settings,
  TIconProps,
  VideoFillIcon,
} from '@assets/icons';
import {HStack, Image, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const icons = {
  setting: (props: TIconProps) => <Settings {...props} />,
  listBucket: (props: TIconProps) => <ListBucketIcon {...props} />,
  calender: (props: TIconProps) => <CalenderIcon {...props} />,
  call: (props: TIconProps) => <CallFillIcon {...props} />,
  checkList: (props: TIconProps) => <CheckListIcon {...props} />,
};

export default function MainHeader({
  title,
  type,
  onPress,
  onRightPress,
  iconRightType = 'setting',
}: {
  title?: string;
  type?: string;
  iconRightType?: 'setting' | 'listBucket' | 'calender' | 'call' | 'checkList';
  onPress?: () => void;
  onRightPress?: () => void;
}) {
  const insets = useSafeAreaInsets();

  const Icon = icons[iconRightType] || icons.listBucket;

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

      <HStack alignItems={'center'} space={6}>
        <TouchableOpacity onPress={onPress}>
          {onPress && <Icon width={22} height={22} />}
        </TouchableOpacity>
        {/* {onRightPress && (
          <TouchableOpacity onPress={onRightPress}>
            <VideoFillIcon width={22} height={22} />
          </TouchableOpacity>
        )} */}
      </HStack>
    </HStack>
  );
}
