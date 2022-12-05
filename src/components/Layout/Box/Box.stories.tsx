import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '.';
import BoxType from './type';

export default {
  title: 'Components / Layout / Box',
  component: Box,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<BoxType> = (args) => <Box {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: 'Lorem ipsum dolor sit amet.',
};

export const custom = Template.bind({});

custom.args = {
  children: 'Lorem ipsum dolor sit amet.',
  width: '320px',
  height: '160px',
  padding: '24px',
  borderRadius: '4px',
  background: 'white',
  border: '1px solid black',
};
