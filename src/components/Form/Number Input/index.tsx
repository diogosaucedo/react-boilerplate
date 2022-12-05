import React from 'react';
import InputType from './type';
import * as Styles from './styles';

const NumberInput = ({
  value,
  onChange,
  required,
  placeholder,
  width,
  height,
  padding,
  borderRadius,
  background,
  border,
  color,
  fontSize,
  fontFamily,
  outline,
}: InputType) => {
  return (
    <Styles.NumberInput
      type="number"
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      background={background}
      border={border}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      outline={outline}
    />
  );
};

export default NumberInput;
