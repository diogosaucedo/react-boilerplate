import React from 'react';
import { Meta, Story } from '@storybook/react';
import Wrap from '.';
import WrapType from './type';

export default {
  title: 'Components / Layout / Wrap',
  component: Wrap,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<WrapType> = (args) => <Wrap {...args} />;

export const basic = Template.bind({});

const children = [
  <p key={0}>Lorem, ipsum dolor.</p>,
  <p key={1}>Lorem, ipsum dolor.</p>,
  <p key={2}>Lorem, ipsum dolor.</p>,
  <p key={3}>Lorem, ipsum dolor.</p>,
  <p key={4}>Lorem, ipsum dolor.</p>,
  <p key={5}>Lorem, ipsum dolor.</p>,
  <p key={6}>Lorem, ipsum dolor.</p>,
  <p key={7}>Lorem, ipsum dolor.</p>,
  <p key={8}>Lorem, ipsum dolor.</p>,
  <p key={9}>Lorem, ipsum dolor.</p>,
];

basic.args = {
  children: children,
};

export const custom = Template.bind({});

custom.args = {
  children: children,
  flexWrap: 'wrap',
  gap: '16px',
  padding: '24px',
  borderRadius: '4px',
  background: 'white',
  border: '1px solid black',
};
