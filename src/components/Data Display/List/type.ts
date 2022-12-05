import React from 'react';

type ListType = {
  data?: Array<DataType>;
  gap?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
};

type DataType = {
  id: number;
  value: React.ReactNode;
};
export default ListType;
