import {Center, HStack, Skeleton, VStack} from 'native-base';

export const SkeletonsBlogCard = () => {
  return (
    <Center w="100%">
      <VStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={8}
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}
        p="4">
        <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
        <VStack flex="3" space="4">
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="10" rounded="full" />
            <VStack>
              <Skeleton h="3" rounded="full" />
              <Skeleton h="3" rounded="full" />
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};

export const SkeletonsProgramList = () => {
  return (
    <Center w="100%">
      <VStack
        w="100%"
        maxW="400"
        space={8}
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}>
        <Skeleton h="5" w={'2/4'} rounded="md" />
        {[{}, {}, {}, {}]?.map((i, index) => (
          <VStack
            key={index}
            flex="3"
            space="4"
            borderWidth={1}
            borderColor={'gray.100'}
            borderRadius={'md'}
            p={3}>
            <HStack space="2" alignItems="center">
              <Skeleton size="16" rounded="md" />
              <Skeleton.Text w={'4/5'} />
            </HStack>
          </VStack>
        ))}
      </VStack>
    </Center>
  );
};
export const SkeletonsExerciseItem = () => {
  return (
    <Center w="100%">
      <VStack
        w="100%"
        maxW="400"
        space={8}
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}>
        <Skeleton h="5" w={'2/4'} rounded="md" />
        {[{}, {}, {}, {}]?.map((i, index) => (
          <VStack
            key={index}
            flex="3"
            space="4"
            borderWidth={1}
            borderColor={'gray.100'}
            borderRadius={'md'}
            p={3}>
            <HStack space="2" alignItems="center">
              <Skeleton size="16" rounded="md" />
              <Skeleton.Text w={'4/5'} />
            </HStack>
          </VStack>
        ))}
      </VStack>
    </Center>
  );
};
export const SkeletonsRecipePlan = () => {
  return (
    <Center w="100%">
      <VStack
        w="100%"
        maxW="400"
        space={8}
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}>
        {[{}, {}, {}]?.map((i, index) => (
          <VStack
            key={index}
            space="4"
            borderWidth={1}
            borderColor={'gray.100'}
            borderRadius={'md'}>
            <Skeleton h="4" w={'2/4'} rounded="md" />
            <HStack space="2" alignItems="center">
              <Skeleton size="16" rounded="md" />
              <Skeleton.Text w={'4/5'} />
            </HStack>
            <HStack space="2" alignItems="center">
              <Skeleton size="16" rounded="md" />
              <Skeleton.Text w={'4/5'} />
            </HStack>
          </VStack>
        ))}
      </VStack>
    </Center>
  );
};
export const SkeletonsDailyMacro = () => {
  return (
    <HStack
      justifyContent={'space-between'}
      px={2}
      py={2}
      bg="#FFFFFF"
      rounded="xl"
      shadow={1}>
      {[{}, {}, {}, {}]?.map((i, index) => (
        <VStack
          justifyContent="center"
          alignItems="center"
          px={2}
          py={2}
          style={{
            gap: 3,
          }}>
          <Skeleton h={'2'} w={'10'} rounded="md" />
          <Skeleton h={'10'} w={'10'} rounded="md" />
          <Skeleton h={'2'} w={'10'} rounded="md" />
        </VStack>
      ))}
    </HStack>
  );
};
