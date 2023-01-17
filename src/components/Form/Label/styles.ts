import styled from 'styled-components';

import LabelProps from './types';

const Label = styled.label<LabelProps>`
  // Box model
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};

  // Display
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  color: ${({ color }) => color || 'inherit'};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  word-wrap: break-word;
`;

export { Label };
