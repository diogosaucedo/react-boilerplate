import React from 'react';
import InputType from './type';
import * as Styles from './styles';

const Input = ({
  type,
  value,
  onChange,
  required,
  placeholder,
  pattern,
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
    <Styles.Input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      pattern={pattern}
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

export default Input;
