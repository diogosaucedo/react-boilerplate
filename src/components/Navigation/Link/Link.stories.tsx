import React from 'react';
import { Meta, Story } from '@storybook/react';
import Link from '.';
import LinkType from './type';

export default {
  title: 'Components / Navigation / Link',
  component: Link,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<LinkType> = (args) => <Link {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: 'Lorem ipsum.',
};
export const custom = Template.bind({});

custom.args = {
  children: 'Lorem ipsum.',
  href: 'http://anywhere.com',
  fontSize: '16px',
  fontWeight: 400,
  color: 'gray',
};
