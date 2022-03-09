import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Center } from './Center';

export default {
  title: 'Elements/Layout/Center',
  component: Center,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Center>;

type Story = ComponentStoryObj<typeof Center>;

export const Default: Story = {
  argTypes: {
    inline: {
      control: 'boolean',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  render: (args) => (
    <Center style={{ width: 400, height: 200, backgroundColor: '#e7f5ff' }}>
      <div>All elements inside Center are centered</div>
    </Center>
  ),
};

// export const Inline: Story = {
//   args: {
//     inline: true,
//   },
// };
