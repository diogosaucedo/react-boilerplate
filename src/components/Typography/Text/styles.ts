import TextType from './type';
import styled from 'styled-components';

const Text = styled.p<TextType>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || '12px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color};
`;

export { Text };
