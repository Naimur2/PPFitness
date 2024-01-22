import React from 'react';
import {ScrollView, VStack} from 'native-base';
import Tab from 'src/components/Tab';
import VideoDetails from 'src/layouts/VideoDetails';
import ExerciseHistory from 'src/layouts/ExerciseHistory';
import TableRow from 'src/components/TableRow';
import {useRoute} from '@react-navigation/native';
import PersonalBest from 'src/layouts/PersonalBest';
import {
  useGetExerciseHistoryBuyIdQuery,
  useGetSingleExerciseByIdQuery,
} from '@store/apis/exercise';

const tabs = [
  {
    title: 'About',
    key: 'About',
  },
  {
    title: 'History',
    key: 'History',
  },
  {
    title: "PB's",
    key: 'PBs',
  },
];

export default function ExerciseDetails() {
  const route = useRoute().params;
  const [activeTab, setActiveTab] = React.useState('About');
  //  APIS
  const {data} = useGetExerciseHistoryBuyIdQuery(route?.id);
  const {data: exercise} = useGetSingleExerciseByIdQuery(route?.id);

  //
  return (
    <ScrollView
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
      }}>
      <Tab
        tabs={tabs}
        activeTab={activeTab}
        onPress={setActiveTab}
        _containerStyle={{
          px: 3,
        }}
      />
      {activeTab === 'About' ? (
        <VideoDetails data={exercise?.data?.data} />
      ) : null}
      {activeTab === 'History' ? (
        <ExerciseHistory data={data?.data?.data} />
      ) : null}
      {activeTab === 'PBs' ? <PersonalBest data={data?.data?.data} /> : null}
    </ScrollView>
  );
}
