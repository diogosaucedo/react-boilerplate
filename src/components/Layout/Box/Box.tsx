import React from 'react';

import * as Styled from './styles';
import BoxProps from './types';

export const Box = (props: BoxProps) => {
  return <Styled.Box {...props}>{props.children}</Styled.Box>;
};
