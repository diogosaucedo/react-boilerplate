import React from 'react';
import DividerType from './type';
import * as Styles from './styles';

const Diviver = ({ width, opacity }: DividerType) => {
  return <Styles.Divider width={width} opacity={opacity} />;
};

export default Diviver;
