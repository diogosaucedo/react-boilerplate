import React from 'react';
import * as Styles from './styles';
import StackType from './type';

const Stack = ({
  children,
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  padding,
  borderRadius,
  background,
  border,
}: StackType) => {
  return (
    <Styles.Stack
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      padding={padding}
      borderRadius={borderRadius}
      background={background}
      border={border}
    >
      {children}
    </Styles.Stack>
  );
};

export default Stack;
