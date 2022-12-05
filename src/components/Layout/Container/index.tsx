import React from 'react';
import ContainerType from './type';
import * as Styles from './styles';

const Center = ({
  children,
  width,
  height,
  padding,
  maxWidth,
  borderRadius,
  background,
  border,
}: ContainerType) => {
  return (
    <Styles.Container
      width={width}
      height={height}
      padding={padding}
      maxWidth={maxWidth}
      borderRadius={borderRadius}
      background={background}
      border={border}
    >
      {children}
    </Styles.Container>
  );
};

export default Center;
