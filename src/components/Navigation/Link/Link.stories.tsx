import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Link } from './Link';
import LinkProps from './types';

export default {
  title: 'Components / Navigation / Link',
  component: Link,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

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
