import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Radio } from './Radio';
import RadioProps from './types';

export default {
  title: 'Components / Form / Radio',
  component: Radio,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const custom = Template.bind({});
custom.args = {
  id: 'your_id',
};
