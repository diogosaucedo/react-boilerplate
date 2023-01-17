import styled from 'styled-components';

import TextProps from './types';

const Text = styled.p<TextProps>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color};
`;

export { Text };
