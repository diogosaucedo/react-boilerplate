import React from 'react';
import * as Styles from './styles';
import Linktype from './type';
const Link = ({
  children,
  external,
  href,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textDecoration,
}: Linktype) => {
  return (
    <Styles.Link
      target={external ? '_blank' : ''}
      href={href}
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textDecoration={textDecoration}
    >
      {children}
    </Styles.Link>
  );
};

export default Link;
