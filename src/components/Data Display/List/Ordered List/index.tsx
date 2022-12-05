import React from 'react';
import ListType from '../type';
import ListItem from '../ListItem';
import * as Styles from './styles';

const OrderedList = ({
  data,
  gap,
  fontFamily,
  fontSize,
  fontWeight,
  color,
}: ListType) => {
  return (
    <Styles.OrderedList
      gap={gap}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {data?.map(({ id, value }) => (
        <ListItem key={id}>{value}</ListItem>
      ))}
    </Styles.OrderedList>
  );
};

export default OrderedList;
