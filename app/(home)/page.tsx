import { accordionItems } from '@/components/Accordion/Accordion.mock';
import SliderSection from './SliderSection';
import AuthSection from './AuthSection';
import QuizSection from './QuizSection';
import PopularCoursesSection from './PopularCoursesSection';
import HandsOnLearningSection from './HandsOnLearningSection';
import SectionContainer from './components/SectionContainer';

export default function Home() {
  return (
    <main className="flex-col">
      <div className="flex flex-wrap lg:flex-nowrap flex-grow">
        <SliderSection />
        <AuthSection />
      </div>

      <QuizSection />

      <PopularCoursesSection />

      <div className="w-full min-h-1 ">
        <SectionContainer className="bg-white">sdfadsfsadfas</SectionContainer>
      </div>

      <HandsOnLearningSection />
    </main>
  );
}
