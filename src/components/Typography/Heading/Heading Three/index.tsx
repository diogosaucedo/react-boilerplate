import React from 'react';
import HeadingType from '../type';
import * as Styles from './styles';

const HeadingThree = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
}: HeadingType) => {
  return (
    <Styles.HeadingThree
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Styles.HeadingThree>
  );
};

export default HeadingThree;
