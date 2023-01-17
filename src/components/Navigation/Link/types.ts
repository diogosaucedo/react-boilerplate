import React from 'react';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  target?: string;
  external?: boolean;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
  textDecoration?: string;
};

export default LinkProps;
