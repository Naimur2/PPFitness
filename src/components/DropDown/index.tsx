import {fontSizes} from '@theme/typography';
import {
  Actionsheet,
  ChevronDownIcon,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

type TOption = {
  label: string;
  value: number | string;
};

type TDropdown = {
  label: string;
  value?: TOption;
  data: TOption[];
  onChange: (value: TOption) => void;
} & React.ComponentProps<typeof Pressable>;

export default function DropDown({
  label,
  data,
  onChange,
  value,
  ...rest
}: TDropdown) {
  const [isActionSheetOpen, setIsActionSheetOpen] = React.useState(false);
  return (
    <>
      <Pressable
        borderWidth={1}
        borderColor={'#8B8B8B'}
        px={4}
        py={2}
        rounded={'full'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={'row'}
        style={{gap: 8}}
        width={'40%'}
        {...rest}
        onPress={() => {
          setIsActionSheetOpen(true);
        }}>
        <Text color={'#7D7C81'} fontSize={fontSizes.sm} fontWeight={400}>
          {value?.label || label}
        </Text>
        <ChevronDownIcon size={4} color={'#7D7C81'} />
      </Pressable>
      <Actionsheet
        isOpen={isActionSheetOpen}
        onClose={() => {
          setIsActionSheetOpen(false);
        }}>
        <Actionsheet.Content>
          <VStack space={1} w={'full'}>
            {data?.map(d => (
              <Pressable
                backgroundColor={
                  value?.value === d.value ? 'primary.100' : 'white'
                }
                px="4"
                py="3"
                key={d.value}
                onPress={() => {
                  onChange?.(d);
                  setIsActionSheetOpen(false);
                }}>
                <Text
                  fontSize={fontSizes.sm}
                  fontWeight={500}
                  color={value?.value === d.value ? 'white' : 'black'}>
                  {d.label}
                </Text>
              </Pressable>
            ))}
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
