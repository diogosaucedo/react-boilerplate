import styled from 'styled-components';

import HighlightProps from './types';

const Highlight = styled.p<HighlightProps>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  color: ${({ color }) => color};
  background: ${({ background }) => background || 'yellow'};
`;

export { Highlight };
