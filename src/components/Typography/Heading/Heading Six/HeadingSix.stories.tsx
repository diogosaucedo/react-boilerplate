import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeadingSix from '.';
import HeadingType from '../type';

export default {
  title: 'Components / Typography / Heading / HeadingSix',
  component: HeadingSix,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<HeadingType> = (args) => <HeadingSix {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: 'Lorem ipsum dolor sit, amet.',
};

export const custom = Template.bind({});

custom.args = {
  children: 'Lorem ipsum dolor sit, amet.',
  color: 'gray',
  fontSize: '14px',
};
