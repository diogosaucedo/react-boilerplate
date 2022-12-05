import React from 'react';
import * as Styles from './styles';
import WrapType from './type';

const Wrap = ({
  children,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  gap,
  padding,
  borderRadius,
  background,
  border,
}: WrapType) => {
  return (
    <Styles.Wrap
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      padding={padding}
      borderRadius={borderRadius}
      background={background}
      border={border}
    >
      {children}
    </Styles.Wrap>
  );
};

export default Wrap;
