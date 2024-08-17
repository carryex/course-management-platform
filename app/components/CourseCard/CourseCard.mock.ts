import { CourseCardProps } from './CourseCard';

export const freeCourseMock: CourseCardProps = {
  variant: 'free',
  title: 'Learn How to Use AI for Coding',
  description:
    'Ready to learn how to use AI for coding? Learn how to use generative AI tools like ChatGPT to generate code and expedite your development.',
  difficulty: 'Beginner',
  duration: '1 hour',
};

export const careerPathMock: CourseCardProps = {
  variant: 'career',
  title: 'Machine Learning/AI Engineer',
  description:
    'Machine Learning/AI Engineers build end-to-end ML applications and power many of the apps we use every day. They work in Python, Git, & ML.',
  difficulty: 'Intermediate',
  duration: '50 hours',
  coursesCount: 7,
};
