import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// Define metadata for the Button component
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    link: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default story
export const Default: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Default Button',
  },
};

// Text variant story
export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Text Button',
  },
};

// Contained variant story
export const Contained: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Contained Button',
  },
};

// Outlined variant story
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined Button',
  },
};

// Disabled story
export const Disabled: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

// Link story
export const LinkButton: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    link: true,
    href: '/example-page',
    children: 'Link Button',
  },
};
