import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';
import { slides } from './Carousel.mock';

// Метаданные stories, описывающие компонент и его настройки
const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// Дефолтная story с базовой каруселью
export const Default: Story = {
  args: {
    slides,
  },
};
