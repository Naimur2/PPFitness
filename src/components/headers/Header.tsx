import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import MainHeader from './MainHeader';

export default function Header({
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
  const navigation = useNavigation();
  //
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <MainHeader
          title={title}
          onPress={onPress}
          iconRightType={iconRightType}
          type={type}
        />
      ),
    });
  }, [navigation]);

  return <></>;
}
