import CourseCard from '../CourseCard';
import { CourseCardProps } from '../CourseCard/CourseCard';

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

export const accordionContainerMock = [
  {
    title: 'AI-assisted learning',
    content: (
      <p>
        Make progress faster with our AI Learning Assistant, a tool that
        automatically understands your current course, instructions, and
        solution code — and gives you instant, personalized feedback.
      </p>
    ),
    image: '/ala_demo.png',
  },
  {
    title: 'Real-world projects',
    content: (
      <p>
        Take what you&apos;re learning into the real world. Choose from guided
        projects that help you solidify new concepts — or test yourself with
        independent projects designed to build your portfolio.
      </p>
    ),
    image: '/real-world-projects.webp',
  },
  {
    title: 'Job-readiness checker',
    content: (
      <p>
        See how well your skills and experience meet the requirements for jobs
        you&apos;re interested in. AI generates a personalized report to show
        you how ready you are for your dream job and where to improve to qualify
        for a role.
      </p>
    ),
    image: '/job-readiness-checker.gif',
  },
  {
    title: 'Interview simulator',
    content: (
      <p>
        Use AI to identify strengths and get personalized, actionable feedback
        to improve your interviewing skills. Easily see what&apos;s needed to
        improve your skills — no matter what stage you&apos;re at in your
        career.
      </p>
    ),
    image: '/interview-simulator.gif',
  },
  {
    title: 'Assessments',
    content: (
      <p>
        Test new skills as you learn them so you can better understand and apply
        new concepts. You&apos;ll also see which topics need more review and get
        practice recommendations to continue to improve.
      </p>
    ),
    image: '/assessments.webp',
  },
];
