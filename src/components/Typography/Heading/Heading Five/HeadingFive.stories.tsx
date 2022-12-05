import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeadingFive from '.';
import HeadingType from '../type';

export default {
  title: 'Components / Typography / Heading / HeadingFive',
  component: HeadingFive,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<HeadingType> = (args) => <HeadingFive {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: 'Lorem ipsum dolor sit, amet.',
};

export const custom = Template.bind({});

custom.args = {
  children: 'Lorem ipsum dolor sit, amet.',
  color: 'gray',
  fontSize: '16px',
};
