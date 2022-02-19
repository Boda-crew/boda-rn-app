import React, { useState } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

interface AImageProps extends FastImageProps {
  width: number;
  height: number;
  loadingURI: string;
}

// TODO: 로딩 이미지, blur, 최적화

export const AImage = ({ width, height, loadingURI, ...props }: AImageProps) => {
  const [imgLoad, setImgLoad] = useState(false);

  if (!imgLoad)
    return <FastImage style={{ width, height }} source={{ uri: loadingURI }} />;

  return (
    <FastImage
      style={{ width: imgLoad ? width : 0, height }}
      onLoadEnd={() => setImgLoad(true)}
      resizeMode={FastImage.resizeMode.contain}
      {...props}
    />
  );
};
