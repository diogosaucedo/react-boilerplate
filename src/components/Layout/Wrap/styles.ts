import styled from 'styled-components';
import WrapType from './type';

const Wrap = styled.ul<WrapType>`
  // Layout
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};

  // Box Model
  padding: ${({ padding }) => padding};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
`;

export { Wrap };
