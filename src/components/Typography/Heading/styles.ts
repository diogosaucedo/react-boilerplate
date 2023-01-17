import styled from 'styled-components';

import HeadingProps from './types';

const Heading = styled.h1<HeadingProps>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export { Heading };
