import HighlightType from './type';
import styled from 'styled-components';

const Highlight = styled.p<HighlightType>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  color: ${({ color }) => color};
  background: ${({ background }) => background || 'yellow'};
`;

export { Highlight };
