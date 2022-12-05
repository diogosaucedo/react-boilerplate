import React from 'react';
import ListItemType from './type';
import * as Styles from './styles';

const ListItem = ({ children, color }: ListItemType) => {
  return <Styles.ListItem color={color}>{children}</Styles.ListItem>;
};

export default ListItem;
