import DividerType from './type';
import styled from 'styled-components';

const Divider = styled.hr<DividerType>`
  width: ${({ width }) => (width ? width : '100%')};
  opacity: ${({ opacity }) => opacity};
`;

export { Divider };
