import { Meta, Story } from '@storybook/react';
import React from 'react';

import { List } from './List';

import ListProps from './types';

export default {
  title: 'Components / Data Display / List',
  component: List,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const custom = Template.bind({});

custom.args = {
  type: 'ol',
  data: [
    { id: 1, value: 'item' },
    { id: 2, value: 'item' },
    { id: 3, value: 'item' },
  ],
  gap: '8px',
  fontSize: '16px',
  color: 'white',
};
