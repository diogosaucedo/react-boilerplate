import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Image } from './Image';
import ImageProps from './types';

export default {
  title: 'Components / Media and Icons / Image',
  component: Image,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const basic = Template.bind({});

basic.args = {
  src: 'https://bit.ly/dan-abramov',
  alt: 'Dan Abramov',
};

export const custom = Template.bind({});

custom.args = {
  src: 'https://bit.ly/dan-abramov',
  alt: 'Dan Abramov',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
};
