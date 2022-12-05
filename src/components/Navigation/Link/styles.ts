import Linktype from './type';
import styled from 'styled-components';

const Link = styled.a<Linktype>`
  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  color: ${({ color }) => color || 'inherit'};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;

export { Link };
