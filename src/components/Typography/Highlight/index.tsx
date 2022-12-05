import React from 'react';
import * as Styles from './styles';
import HighlightType from './type';

const Highlight = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
  background,
}: HighlightType) => {
  return (
    <Styles.Highlight
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      background={background}
    >
      {children}
    </Styles.Highlight>
  );
};

export default Highlight;
