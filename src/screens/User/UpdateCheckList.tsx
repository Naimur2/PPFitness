import useImageUploader from '@hooks/useImageUploader';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  useGetCheckListByIdQuery,
  useGetCheckListByUserQuery,
  useLazyGetCheckListByIdQuery,
  useSubmitCheckListMutation,
} from '@store/apis/checklist';
import {useUpdateFileMutation} from '@store/apis/userProfile';
import {GetV1ChecklistUserSuccessfulResponse} from '@store/schema';
import {fontSizes} from '@theme/typography';
import dayjs from 'dayjs';
import {useFormik} from 'formik';
import {
  Button,
  DeleteIcon,
  FormControl,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import ChecklistItem from 'src/components/ChecklistItem';
import createFormFile from 'src/utils/fileDetails';
import * as Yup from 'yup';

type TCheckList = GetV1ChecklistUserSuccessfulResponse['data']['data'][0];

export default function UpdateCheckList() {
  const route = useRoute();
  const toast = useShowToastMessage();
  const navigate = useNavigation();

  const params = route.params as {
    id: string;
  };

  const {data, isLoading, error} = useGetCheckListByIdQuery(params?.id, {
    refetchOnMountOrArgChange: true,
    skip: !params?.id,
  });

  const [submitCheckList, submitCheckListRes] = useSubmitCheckListMutation();
  const [handelFileUpload, {}] = useUpdateFileMutation();

  const formik = useFormik({
    initialValues: {
      comment: '',
      image: '',
    },
    onSubmit: async values => {
      try {
        const formData = new FormData();
        if (values?.image) {
          formData.append(
            'files',
            createFormFile(values?.image, 'image', 'image.png'),
          );
        }
        const fileRes = await handelFileUpload(formData).unwrap();

        const res = await submitCheckList({
          date: dayjs().format('YYYY-MM-DD'),
          day: dayjs().format('dddd') as any,
          comment: values.comment,
          profOfCompletion: fileRes?.data?.data?.[0]?.url || '',
          id: params?.id,
        }).unwrap();
        toast(res?.data?.message);
        if (navigate.canGoBack()) {
          navigate.goBack();
        } else {
          navigate.navigate('CheckList');
        }
      } catch (error) {
        console.log('error', error);
        toast(error?.data?.error?.message, 'error');
      }
      console.log('values', values);
    },
    validationSchema: Yup.object().shape({
      comment: Yup.string().optional(),
      image: Yup.string().required('Image is required'),
    }),
  });

  const {handleImagePicker} = useImageUploader();

  const onImagePicker = async () => {
    try {
      const file = await handleImagePicker();
      console.log('file', file);
      formik.setFieldValue('image', file?.uri);
    } catch (error) {
      console.log('error', error);
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
      <VStack space={1}>
        <Text fontWeight={700} color={'#1A1929'} fontSize={fontSizes.xl}>
          {data?.data?.data?.title}
        </Text>
        <Text color={'#7D7C81'} fontSize={fontSizes.xs} mb={4}>
          {dayjs().format('dddd, MMMM D, YYYY')}
        </Text>
      </VStack>

      <VStack space={4}>
        <Text color={'#1A1929'} fontSize={fontSizes.sm}>
          {data?.data?.data?.description}
        </Text>
      </VStack>

      <FormControl isRequired isInvalid={!!formik.errors.comment}>
        <FormControl.Label fontSize={fontSizes.sm}>
          Describe your experience
        </FormControl.Label>
        <Input
          placeholder="Your Comment"
          value={formik.values.comment}
          onChangeText={formik.handleChange('comment')}
          multiline={true}
          numberOfLines={4}
          verticalAlign="top"
          textAlignVertical="top"
          borderWidth={1}
          borderColor={'#E5E5E5'}
          backgroundColor={'#FFFFFF'}
          mt={1}
        />
        <FormControl.ErrorMessage>
          {formik.errors.comment}
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!!formik.errors.image}>
        <FormControl.Label fontSize={fontSizes.sm}>
          Upload Image for the proof
        </FormControl.Label>
        <Pressable mt={1} onPress={onImagePicker} p={2}>
          <Text
            color={'#1A1929'}
            fontSize={fontSizes.sm}
            borderWidth={1}
            borderColor={'#E5E5E5'}
            backgroundColor={'#fcfcfc'}
            p={2}
            rounded={'md'}
            textAlign={'center'}>
            Upload Image
          </Text>
        </Pressable>
        <FormControl.ErrorMessage>
          {formik.errors.image}
        </FormControl.ErrorMessage>
      </FormControl>

      {formik.values.image ? (
        <VStack position={'relative'}>
          <Image
            source={{uri: formik.values.image}}
            alt={'image base'}
            height={200}
            width={'100%'}
            rounded={8}
            resizeMode={'cover'}
          />
          <Pressable
            position={'absolute'}
            top={0}
            right={0}
            bg={'#FFFFFF'}
            rounded={'full'}
            p={2}
            onPress={() => {
              formik.setFieldValue('image', '');
            }}>
            <DeleteIcon size={4} />
          </Pressable>
        </VStack>
      ) : null}

      <Button
        w="full"
        bg={'primary.100'}
        rounded={8}
        onPress={() => {
          formik?.handleSubmit();
        }}
        py={3}
        mt={4}
        _text={{color: 'white', fontWeight: 700}}
        _pressed={{bg: '#68696B90'}}
        isLoading={submitCheckListRes.isLoading || isLoading}
        isDisabled={submitCheckListRes.isLoading || isLoading}>
        Submit
      </Button>
    </ScrollView>
  );
}
