import styled from 'styled-components';

import { SelectProps, OptionProps } from './types';

const Select = styled.select<SelectProps>`
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

const Option = styled.option<OptionProps>`
  background: inherit;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
`;

export { Select, Option };
