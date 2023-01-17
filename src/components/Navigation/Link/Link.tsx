import React from 'react';

import * as Styled from './styles';
import LinkProps from './types';

export const Link = (props: LinkProps) => {
  return <Styled.Link {...props}>{props.children}</Styled.Link>;
};
