import React from 'react';
import { Meta, Story } from '@storybook/react';
import Stack from '.';
import StackType from './type';

export default {
  title: 'Components / Layout / Stack',
  component: Stack,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<StackType> = (args) => <Stack {...args} />;

export const basic = Template.bind({});

const children = [
  <p key={0}>Lorem, ipsum dolor.</p>,
  <p key={1}>Lorem, ipsum dolor.</p>,
  <p key={2}>Lorem, ipsum dolor.</p>,
];

basic.args = {
  children: children,
};

export const custom = Template.bind({});

custom.args = {
  children: children,
  gap: '16px',
  padding: '24px',
  borderRadius: '4px',
  background: 'white',
  border: '1px solid black',
};
