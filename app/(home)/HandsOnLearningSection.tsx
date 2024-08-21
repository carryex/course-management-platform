import HandsOnLearning from '@/components/HandsOnLearning/HandsOnLearning';
import SectionContainer from './components/SectionContainer';
import SectionHeader from './components/SectionHeader';

const HandsOnLearningSection = () => {
  return (
    <div className="w-full">
      <SectionContainer className="bg-gray-900 flex flex-col">
        <SectionHeader title="Hands-on learning" subtitle="The platform" />
        <HandsOnLearning />
      </SectionContainer>
    </div>
  );
};

export default HandsOnLearningSection;
