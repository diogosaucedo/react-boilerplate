import ListProps from './types';
import styled from 'styled-components';

export const List = styled.ul<ListProps>`
  // Layout
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};

  // Display
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;
