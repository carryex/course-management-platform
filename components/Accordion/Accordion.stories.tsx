import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import { accordionItems } from './Accordion.mock';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Default story
export const Default: Story = {
  args: { items: accordionItems },
};
