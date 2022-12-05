import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input from '.';
import InputType from './type';

export default {
  title: 'Components / Form / Input',
  component: Input,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<InputType> = (args) => <Input {...args} />;

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
