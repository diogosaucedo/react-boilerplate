import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Input } from './Input';
import InputProps from './types';

export default {
  title: 'Components / Form / Input',
  component: Input,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const basic = Template.bind({});
basic.args = {
  type: 'text',
  placeholder: 'Sample input',
};

export const custom = Template.bind({});
custom.args = {
  type: 'text',
  placeholder: 'Only letters',
  pattern: '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$',
  required: true,
  width: '160px',
  height: '40px',
  padding: '0 4px',
  borderRadius: '4px',
  background: 'white',
  border: 'none',
  color: 'gray',
  fontSize: '12px',
};
