import React from 'react';

type RadioProps = {
  type: 'radio';
  checked?: boolean;
  name?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

export default RadioProps;
