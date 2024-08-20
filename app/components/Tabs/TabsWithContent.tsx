'use client';

import React, { useState } from 'react';
import Tabs from './Tabs';
import TabPanel from './TabPanel';
import { baseTabs } from './Tab.styles';

interface TabsWithContentProps {
  tabs: string[];
  children: React.ReactNode[];
  initialActiveTab?: number;
}

const TabsWithContent: React.FC<TabsWithContentProps> = ({
  tabs,
  children,
  initialActiveTab = 0,
}) => {
  const { tabsWithContentContainer } = baseTabs();
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={tabsWithContentContainer()}>
      <Tabs
        tabs={tabs}
        initialActiveTab={activeTab}
        onChange={handleTabChange}
      />
      {children.map((child, index) => (
        <TabPanel key={index} isActive={index === activeTab}>
          {child}
        </TabPanel>
      ))}
    </div>
  );
};

export default TabsWithContent;
