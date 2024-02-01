import { Factory } from 'native-base';
import React, { useEffect } from 'react';
import { Image, ImageProps } from 'react-native';

const DEFAULT_IMAGE = require('@assets/images/default.png');
const DEFAULT_IMAGE_URL = Image.resolveAssetSource(DEFAULT_IMAGE).uri;

const FactoryImage = Factory(Image);

type TProps = ImageProps & {
  source: {
    uri: string;
  };
};

export default function LazyImage({source, ...rest}: TProps) {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  useEffect(() => {
    const loadImage = async () => {
      try {
        await Image.prefetch(source?.uri || '');
        setLoaded(true);
      } catch (error) {
        setError(true);
      }
    };
    loadImage();
  }, []);



  return (
    // @ts-ignore
    <FactoryImage
      defaultSource={DEFAULT_IMAGE}
      source={{
        uri: loaded && !error ? source.uri : DEFAULT_IMAGE_URL,
        cache: 'force-cache',
      }}
      blurRadius={loaded ? 0 : 5}
      onError={() => setError(true)}
      style={[rest.style, {backgroundColor: '#f2f2f2'}]}
      {...rest}
    />
  );
}
