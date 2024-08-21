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
        <div className="lg:hidden">
          <Accordion items={accordionItems} />
        </div>
        <div className="hidden lg:block">
          <TabsWithContent tabs={tabs}>{tabsContent}</TabsWithContent>
        </div>
      </SectionContainer>
    </div>
  );
};

export default PopularCoursesSection;
