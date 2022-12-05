import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text from '.';
import TextType from './type';

export default {
  title: 'Components / Typography / Text',
  component: Text,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<TextType> = (args) => <Text {...args} />;

export const basic = Template.bind({});

basic.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae.',
};

export const custom = Template.bind({});

custom.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae.',
  fontSize: '24px',
  fontWeight: 500,
  color: 'gray',
};
