import type { Meta, StoryObj } from '@storybook/react';
import { categories, languages } from './Header.mock';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

// История по умолчанию
export const Default: Story = {};

// История с авторизацией
export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
  },
};

// История без авторизации
export const LoggedOut: Story = {};

// История с открытыми категориями
export const CategoriesOpen: Story = {
  args: {
    categories,
  },
};

// История с открытым меню языков
export const LanguageMenuOpen: Story = {
  args: {
    languages,
  },
};


export const FullData: Story = {
  args: {
    languages,
    categories
  }
}