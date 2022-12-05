import React from 'react';
import HeadingType from '../type';
import * as Styles from './styles';

const HeadingTwo = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
}: HeadingType) => {
  return (
    <Styles.HeadingTwo
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Styles.HeadingTwo>
  );
};

export default HeadingTwo;
