import HeadingType from '../type';
import styled from 'styled-components';

const HeadingSix = styled.h6<HeadingType>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export { HeadingSix };
