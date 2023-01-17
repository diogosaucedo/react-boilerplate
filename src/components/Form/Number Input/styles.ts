import styled from 'styled-components';

import NumberInputProps from './types';

const NumberInput = styled.input<NumberInputProps>`
  // Box Model
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  outline: ${({ outline }) => outline};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
`;

export { NumberInput };
