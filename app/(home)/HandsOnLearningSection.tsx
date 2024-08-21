import HandsOnLearning from '@/components/HandsOnLearning/HandsOnLearning';
import SectionContainer from './components/SectionContainer';

const HandsOnLearningSection = () => {
  return (
    <div className="w-full">
      <SectionContainer className="bg-gray-900 flex flex-col gap-6">
        <div>
          <p className="text-xl text-white text-center">The platform</p>
          <h2 className="text-4xl text-white text-center">Hands-on learning</h2>
        </div>

        <HandsOnLearning />
      </SectionContainer>
    </div>
  );
};

export default HandsOnLearningSection;
