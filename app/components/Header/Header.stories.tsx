import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Header from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  // This component will have an автоматически generated Autodocs entry
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Defaul story
export const Default: Story = {
  args: {},
};