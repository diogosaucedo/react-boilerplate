import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Highlight } from './Highlight';
import HighlightProps from './types';

export default {
  title: 'Components / Typography / Highlight',
  component: Highlight,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<HighlightProps> = (args) => <Highlight {...args} />;

export const basic = Template.bind({});

basic.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae.',
};
export const custom = Template.bind({});

custom.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae.',
  fontSize: '24px',
  fontWeight: 500,
  color: 'black',
  background: 'green',
};
