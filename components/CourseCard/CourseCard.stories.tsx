import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CourseCard from './CourseCard';
import { freeCourseMock, careerPathMock } from './CourseCard.mock';

const meta: Meta<typeof CourseCard> = {
  title: 'Components/CourseCard',
  component: CourseCard,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CourseCard>;

export const FreeCourse: Story = {
  args: {
    ...freeCourseMock,
  },
};

export const CareerPath: Story = {
  args: {
    ...careerPathMock,
  },
};
