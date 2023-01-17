import React from 'react';

import * as Styled from './styles';
import ListItemProps from './types';

export const ListItem = (props: ListItemProps) => {
  return <Styled.ListItem {...props}>{props.children}</Styled.ListItem>;
};
