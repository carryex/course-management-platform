import SliderSection from './SliderSection';
import AuthSection from './AuthSection';
import QuizSection from './QuizSection';
import PopularCoursesSection from './PopularCoursesSection';
import HandsOnLearningSection from './HandsOnLearningSection';
import JobReadinessChecker from './JobReadinessChecker';
import PeopleStories from './PeopleStories';

export default function Home() {
  return (
    <main className="flex-col">
      <div className="flex flex-wrap lg:flex-nowrap flex-grow">
        <SliderSection />
        <AuthSection />
      </div>

      <QuizSection />

      <PopularCoursesSection />

      <JobReadinessChecker />

      <HandsOnLearningSection />

      <PeopleStories />
    </main>
  );
}
