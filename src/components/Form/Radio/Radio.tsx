import React from 'react';

import * as Styled from './styles';
import RadioProps from './types';

export const Radio = (props: RadioProps) => {
  return <Styled.Radio {...props} type="radio"></Styled.Radio>;
};
