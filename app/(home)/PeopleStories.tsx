import Button from '@/components/Button';
import SectionContainer from './components/SectionContainer';
import ReviewCard from './components/ReviewCard';
import { ReviewCardMockData } from './components/ReviewCard.mock';

const PeopleStories = () => {
  const ReviewsJSX = ReviewCardMockData.map((data) => (
    <ReviewCard key={data.title} {...data} />
  ));
  return (
    <div className="w-full">
      <SectionContainer className="bg-white flex flex-col">
        <h2 className="text-5xl text-gray-900 font-semibold">
          Stories from real people
        </h2>
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg text-gray-900">
            Read inspiring stories from the Codecademy community.
          </span>
          <Button variant="text" className="hidden md:block" size="sm">
            Explore more stories →
          </Button>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-y-8 gap-x-4">
          {ReviewsJSX}
        </div>
        <Button
          variant="text"
          className="block md:hidden mt-8 self-center"
          size="sm"
        >
          Explore more stories →
        </Button>
      </SectionContainer>
    </div>
  );
};

export default PeopleStories;
