import React from 'react';
import * as Styles from './styles';
import BoxType from './type';

const Box = ({
  children,
  width,
  height,
  padding,
  borderRadius,
  background,
  border,
}: BoxType) => {
  return (
    <Styles.Box
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      background={background}
      border={border}
    >
      {children}
    </Styles.Box>
  );
};
export default Box;
