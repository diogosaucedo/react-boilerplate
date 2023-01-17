import React from 'react';

import * as Styled from './styles';
import ContainerProps from './types';

export const Container = (props: ContainerProps) => {
  return <Styled.Container {...props}>{props.children}</Styled.Container>;
};
