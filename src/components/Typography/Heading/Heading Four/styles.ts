import HeadingType from '../type';
import styled from 'styled-components';

const HeadingFour = styled.h4<HeadingType>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export { HeadingFour };
