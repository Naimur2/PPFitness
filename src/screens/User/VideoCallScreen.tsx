import React from 'react';
import Header from 'src/components/headers/Header';
import useNavigate from '@hooks/useNavigate';

export default function VideoCallScreen() {
  const navigate = useNavigate();

  const handelAudioCall = () => {
    navigate('');
  };
  const handelVideoCall = () => {};

  return (
    <>
      <Header title="Audio Call" />
    </>
  );
}
