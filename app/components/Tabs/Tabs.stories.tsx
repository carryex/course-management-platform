import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      'AI',
      'Free',
      'New to coding',
      'Most popular',
      'Skill paths',
      'Career paths',
    ],
    initialActiveTab: 0,
  },
};

export const CustomInitialTab: Story = {
  args: {
    tabs: [
      'AI',
      'Free',
      'New to coding',
      'Most popular',
      'Skill paths',
      'Career paths',
    ],
    initialActiveTab: 2,
  },
};
