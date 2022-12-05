import React from 'react';
import HeadingType from '../type';
import * as Styles from './styles';

const HeadingFive = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
}: HeadingType) => {
  return (
    <Styles.HeadingFive
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Styles.HeadingFive>
  );
};

export default HeadingFive;
