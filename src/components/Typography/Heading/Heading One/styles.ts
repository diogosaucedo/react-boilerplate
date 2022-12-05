import HeadingType from '../type';
import styled from 'styled-components';

const HeadingOne = styled.h1<HeadingType>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export { HeadingOne };
