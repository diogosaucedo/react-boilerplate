import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Container } from './Container';
import ContainerProps from './types';

export default {
  title: 'Components / Layout / Container',
  component: Container,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const basic = Template.bind({});

basic.args = {
  children:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat et, neque soluta iste numquam possimus facere voluptate, eaque quae mollitia modi consequatur eius accusantium ea fuga fugiat nostrum. Hic.',
};

export const custom = Template.bind({});

custom.args = {
  children:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat et, neque soluta iste numquam possimus facere voluptate, eaque quae mollitia modi consequatur eius accusantium ea fuga fugiat nostrum. Hic.',
  width: '100%',
  height: '320px',
  padding: '24px',
  maxWidth: '32ch',
  borderRadius: '4px',
  background: 'white',
  border: '1px solid black',
};
