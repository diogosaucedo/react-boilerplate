import React from 'react';
import HeadingType from '../type';
import * as Styles from './styles';

const HeadingOne = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
}: HeadingType) => {
  return (
    <Styles.HeadingOne
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Styles.HeadingOne>
  );
};

export default HeadingOne;
