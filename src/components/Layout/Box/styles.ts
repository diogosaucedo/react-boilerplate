import styled from 'styled-components';
import BoxType from './type';

const Box = styled.div<BoxType>`
  // Box Model
  width: ${({ width }) => width || 'fit-content'};
  height: ${({ height }) => height || 'fit-content'};
  padding: ${({ padding }) => padding};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
`;

export { Box };
