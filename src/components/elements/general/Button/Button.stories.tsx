import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Elements/General/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Button>;

type Story = ComponentStoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'ボタン',
  },
  argTypes: {
    compact: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export const Variant: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button variant='subtle'>ボタン</Button>
      <Button variant='light'>ボタン</Button>
      <Button variant='filled'>ボタン</Button>
      <Button variant='outline'>ボタン</Button>
      <Button variant='default'>ボタン</Button>
    </div>
  ),
};
