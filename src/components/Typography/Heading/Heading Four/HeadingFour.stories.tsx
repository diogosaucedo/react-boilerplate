import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeadingFour from '.';
import HeadingType from '../type';

export default {
  title: 'Components / Typography / Heading / HeadingFour',
  component: HeadingFour,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<HeadingType> = (args) => <HeadingFour {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: 'Lorem ipsum dolor sit, amet.',
};

export const custom = Template.bind({});

custom.args = {
  children: 'Lorem ipsum dolor sit, amet.',
  color: 'gray',
  fontSize: '18px',
};
