import React from 'react';
import { Meta, Story } from '@storybook/react';
import Center from '.';
import CenterType from './type';

export default {
  title: 'Components / Layout / Center',
  component: Center,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<CenterType> = (args) => <Center {...args} />;

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
