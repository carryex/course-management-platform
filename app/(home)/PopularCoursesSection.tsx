import Accordion from '@/components/Accordion';
import { accordionItems } from '@/components/Accordion/Accordion.mock';
import TabsWithContent from '@/components/Tabs/TabsWithContent';
import SectionContainer from './components/SectionContainer';
import SectionHeader from './components/SectionHeader';

const PopularCoursesSection = () => {
  const tabs = accordionItems.map(({ title }) => title);
  const tabsContent = accordionItems.map(({ content }) => content);
  return (
    <div className="w-full">
      <SectionContainer className="bg-gray-900">
        <SectionHeader title="Popular Courses" subtitle="Start Learning" />
        {/* <p className="text-xl text-white text-center">Start Learning</p>
        <h2 className="text-4xl text-white text-center">Popular Courses</h2> */}
        <div className="pt-8 lg:hidden">
          <Accordion items={accordionItems} />
        </div>
        <div className="pt-8 hidden lg:block">
          <TabsWithContent tabs={tabs}>{tabsContent}</TabsWithContent>
        </div>
      </SectionContainer>
    </div>
  );
};

export default PopularCoursesSection;
