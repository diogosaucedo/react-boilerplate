import HeadingType from '../type';
import styled from 'styled-components';

const HeadingTwo = styled.h2<HeadingType>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export { HeadingTwo };
