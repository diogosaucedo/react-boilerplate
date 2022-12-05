import React from 'react';
import ImageType from './type';
import * as Styles from './styles';

const Image = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  border,
}: ImageType) => {
  return (
    <Styles.Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      borderRadius={borderRadius}
      border={border}
    />
  );
};

export default Image;
