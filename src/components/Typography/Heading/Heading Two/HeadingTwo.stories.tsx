import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeadingTwo from '.';
import HeadingType from '../type';

export default {
  title: 'Components / Typography / Heading / HeadingTwo',
  component: HeadingTwo,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<HeadingType> = (args) => <HeadingTwo {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: 'Lorem ipsum dolor sit, amet.',
};

export const custom = Template.bind({});

custom.args = {
  children: 'Lorem ipsum dolor sit, amet.',
  color: 'gray',
  fontSize: '22px',
};
