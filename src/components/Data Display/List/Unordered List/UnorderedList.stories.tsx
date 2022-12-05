import React from 'react';
import { Meta, Story } from '@storybook/react';
import UnorderedList from '.';
import UnorderedListType from '../type';

export default {
  title: 'Components / Data Display / UnorderedList',
  component: UnorderedList,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<UnorderedListType> = (args) => (
  <UnorderedList {...args} />
);

export const custom = Template.bind({});

custom.args = {
  data: [
    { id: 1, value: 'item' },
    { id: 2, value: 'item' },
    { id: 3, value: 'item' },
  ],
  gap: '8px',
  fontSize: '16px',
  color: 'white',
};
