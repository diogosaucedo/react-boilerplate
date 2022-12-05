import styled from 'styled-components';
import ContainerType from './type';

const Container = styled.div<ContainerType>`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: center;

  // Box Model
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'fit-content'};
  padding: ${({ padding }) => padding};
  max-width: ${({ maxWidth }) => maxWidth || '60ch'};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
`;

export { Container };
