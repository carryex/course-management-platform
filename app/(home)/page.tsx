import SliderSection from './SliderSection';
import AuthSection from './AuthSection';
import QuizSection from './QuizSection';
import PopularCoursesSection from './PopularCoursesSection';
import HandsOnLearningSection from './HandsOnLearningSection';
import SectionContainer from './components/SectionContainer';
import JobReadinessChecker from './JobReadinessChecker';

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
    </main>
  );
}
