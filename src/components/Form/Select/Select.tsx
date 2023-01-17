import React from 'react';

import * as Styled from './styles';
import { SelectProps } from './types';

export const Select = (props: SelectProps) => {
  return (
    <Styled.Select {...props}>
      {props?.data?.map((item) => (
        <Styled.Option key={item.id} value={item.id}>
          {item.value}
        </Styled.Option>
      ))}
    </Styled.Select>
  );
};
