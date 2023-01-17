import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Flex } from './Flex';
import FlexProps from './types';

export default {
  title: 'Components / Layout / Flex',
  component: Flex,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

export const basic = Template.bind({});

const children = [
  <p key={0}>Lorem, ipsum dolor.</p>,
  <p key={1}>Lorem, ipsum dolor.</p>,
  <p key={2}>Lorem, ipsum dolor.</p>,
  <p key={3}>Lorem, ipsum dolor.</p>,
];

basic.args = {
  children: children,
};

export const custom = Template.bind({});

custom.args = {
  children: children,
  flexDirection: 'column',
  gap: '16px',
  padding: '24px',
  borderRadius: '4px',
  background: 'white',
  border: '1px solid black',
};
