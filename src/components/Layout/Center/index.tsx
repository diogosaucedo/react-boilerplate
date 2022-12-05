import React from 'react';
import CenterType from './type';
import * as Styles from './styles';

const Center = ({
  children,
  width,
  height,
  padding,
  borderRadius,
  background,
  border,
}: CenterType) => {
  return (
    <Styles.Center
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      background={background}
      border={border}
    >
      {children}
    </Styles.Center>
  );
};

export default Center;
