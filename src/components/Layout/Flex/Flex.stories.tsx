import React from 'react';
import { Meta, Story } from '@storybook/react';
import Flex from '.';
import FlexType from './type';

export default {
  title: 'Components / Layout / Flex',
  component: Flex,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<FlexType> = (args) => <Flex {...args} />;

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
