import React from 'react';

import * as Styled from './styles';
import LabelProps from './types';

export const Label = (props: LabelProps) => {
  return <Styled.Label {...props}>{props.children}</Styled.Label>;
};
