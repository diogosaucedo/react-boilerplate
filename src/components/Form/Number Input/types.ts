import React from 'react';

type NumberInputProps = {
  type: 'number';
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  outline?: string;
};

export default NumberInputProps;
