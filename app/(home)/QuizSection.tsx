import Quiz from '@/components/Quiz';
import SectionContainer from './components/SectionContainer';

const QuizSection = () => {
  return (
    <div className="w-full">
      <SectionContainer className="bg-slate-50">
        <Quiz />
      </SectionContainer>
    </div>
  );
};

export default QuizSection;
