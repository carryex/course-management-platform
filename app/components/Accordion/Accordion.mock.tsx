import CourseCard from '../CourseCard';
import { CourseCardProps } from '../CourseCard/CourseCard';
import Accordion from './Accordion';

const AI: CourseCardProps[] = [
  {
    variant: 'free',
    title: 'Intro to Generative AI',
    description:
      'Dive into the many forms of generative AI and learn how we can best use these new technologies!',
    difficulty: 'Beginner',
    duration: '< 1 hour',
  },
  {
    variant: 'free',
    title: 'Learn How to Use ChatGPT',
    description:
      'Ready to dive into the world of Generative AI? Learn how ChatGPT works, how to use ChatGPT in your everyday life, and how to write effective ChatGPT prompts.',
    difficulty: 'Beginner',
    duration: '1 hour',
  },
  {
    variant: 'free',
    title: 'Learn How to Use AI for Coding',
    description:
      'Ready to learn how to use AI for coding? Learn how to use generative AI tools like ChatGPT to generate code and expedite your development.',
    difficulty: 'Beginner',
    duration: '1 hour',
  },
  {
    variant: 'career',
    title: 'Machine Learning/AI Engineer',
    description:
      'Machine Learning/AI Engineers build end-to-end ML applications and power many of the apps we use every day. They work in Python, Git, & ML.',
    difficulty: 'Intermediate',
    duration: '50 hours',
    coursesCount: 7,
  },
];

export const accordionItems = [
  {
    title: 'AI',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AI.map((course) => (
          <CourseCard {...course} key={course.title} />
        ))}
      </div>
    ),
  },
  {
    title: 'Free',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AI.map((course) => (
          <CourseCard {...course} key={course.title} />
        ))}
      </div>
    ),
  },
  {
    title: 'New to coding',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AI.map((course) => (
          <CourseCard {...course} key={course.title} />
        ))}
      </div>
    ),
  },
  {
    title: 'Most popular',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AI.map((course) => (
          <CourseCard {...course} key={course.title} />
        ))}
      </div>
    ),
  },
  {
    title: 'Skill paths',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AI.map((course) => (
          <CourseCard {...course} key={course.title} />
        ))}
      </div>
    ),
  },
  {
    title: 'Career paths',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AI.map((course) => (
          <CourseCard {...course} key={course.title} />
        ))}
      </div>
    ),
  },
];

const App = () => (
  <div className="p-4">
    <Accordion items={accordionItems} allowMultiple={true} />
  </div>
);

export default App;
