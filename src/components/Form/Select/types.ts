import React from 'react';

type DataType = {
  id: string | number;
  value: React.ReactNode;
};

type SelectProps = {
  children?: React.ReactNode;
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void;
  id?: string;
  data?: Array<DataType>;
  value?: string | number;
  width?: string;
  height?: string;
  padding?: string;
  background?: string;
  border?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
};

type OptionProps = {
  children: React.ReactNode;
};

export type { SelectProps, OptionProps };
