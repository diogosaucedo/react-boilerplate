import React from 'react';

import { ListItem } from './ListItem';
import * as Styled from './styles';
import ListProps from './types';

export const List = (props: ListProps) => {
  return (
    <Styled.List {...props} as={props.type}>
      {props.data?.map(({ id, value }) => (
        <ListItem key={id}>{value}</ListItem>
      ))}
    </Styled.List>
  );
};
