import React from 'react';
import * as Styles from './styles';
import FlexType from './type';

const Flex = ({
  children,
  flexDirection,
  flexWrap,
  flexBasis,
  flexGrow,
  flexShrink,
  alignItems,
  justifyContent,
  gap,
  width,
  height,
  padding,
  borderRadius,
  background,
  border,
}: FlexType) => {
  return (
    <Styles.Flex
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      flexBasis={flexBasis}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      background={background}
      border={border}
    >
      {children}
    </Styles.Flex>
  );
};

export default Flex;
