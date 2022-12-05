import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeadingOne from '.';
import HeadingType from '../type';

export default {
  title: 'Components / Typography / Heading / HeadingOne',
  component: HeadingOne,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<HeadingType> = (args) => <HeadingOne {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: 'Lorem ipsum dolor sit, amet.',
};

export const custom = Template.bind({});

custom.args = {
  children: 'Lorem ipsum dolor sit, amet.',
  color: 'gray',
  fontSize: '24px',
};
