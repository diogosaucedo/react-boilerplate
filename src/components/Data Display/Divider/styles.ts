import styled from 'styled-components';

import DividerProps from './types';

export const Divider = styled.hr<DividerProps>`
  width: ${({ width }) => width || '100%'};
  opacity: ${({ opacity }) => opacity};
`;
