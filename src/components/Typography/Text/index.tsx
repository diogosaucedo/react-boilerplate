import React from 'react';
import * as Styles from './styles';
import TextType from './type';

const Text = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
}: TextType) => {
  return (
    <Styles.Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Styles.Text>
  );
};

export default Text;
