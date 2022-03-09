import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Container } from './Container';

export default {
  title: 'Elements/Layout/Container',
  component: Container,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Container>;

type Story = ComponentStoryObj<typeof Container>;

export const Default: Story = {
  argTypes: {
    fluid: {
      control: 'boolean',
    },
    padding: {},
    size: {},
  },
  parameters: {
    controls: { expanded: true },
  },
  render: (args) => (
    <Container {...args} style={{ backgroundColor: '#e7f5ff' }}>
      Default container
    </Container>
  ),
};

export const Nubmer: Story = {
  argTypes: {
    padding: {},
    size: {},
  },
  parameters: {
    controls: { expanded: true },
  },
  render: (args) => (
    <Container {...args} style={{ backgroundColor: '#e7f5ff' }}>
      xs container with xs horizontal padding
    </Container>
  ),
};
