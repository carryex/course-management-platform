import type { Meta, StoryObj } from '@storybook/react';
import Drawer, { DrawerProps } from './Drawer';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  args: {
    isOpen: true,
    position: 'right',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const Template = (args: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isOpen ? 'Close Drawer' : 'Open Drawer'}
      </button>
      <Drawer {...args} isOpen={isOpen} onClose={toggleDrawer}>
        <div>Drawer Content</div>
      </Drawer>
    </div>
  );
};

export const Interactive: Story = {
  render: Template,
  args: {
    position: 'left',
  },
};
