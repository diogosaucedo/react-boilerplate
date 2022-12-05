import React from 'react';
import HeadingType from '../type';
import * as Styles from './styles';

const HeadingSix = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
}: HeadingType) => {
  return (
    <Styles.HeadingSix
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Styles.HeadingSix>
  );
};

export default HeadingSix;
