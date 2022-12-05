import React from 'react';
import HeadingType from '../type';
import * as Styles from './styles';

const HeadingFour = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
}: HeadingType) => {
  return (
    <Styles.HeadingFour
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Styles.HeadingFour>
  );
};

export default HeadingFour;
