import ListType from '../type';
import styled from 'styled-components';

const UnorderedList = styled.ul<ListType>`
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

export { UnorderedList };
