import styled from 'styled-components';

import LinkProps from './types';

const Link = styled.a<LinkProps>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  color: ${({ color }) => color || 'inherit'};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;

export { Link };
