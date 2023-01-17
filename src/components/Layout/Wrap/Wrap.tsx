import React from 'react';

import * as Styled from './styles';
import WrapProps from './types';

export const Wrap = (props: WrapProps) => {
  return <Styled.Wrap {...props}>{props.children}</Styled.Wrap>;
};
