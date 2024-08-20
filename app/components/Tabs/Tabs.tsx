'use client';
import React, { useState, useEffect, useRef } from 'react';
import Tab from './Tab';
import { baseTabs } from './Tab.styles';

interface TabsProps {
  tabs: string[];
  initialActiveTab?: number;
  onChange?: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  initialActiveTab = 0,
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const { container, indicator, tabsContainer } = baseTabs();

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onChange?.(index);
  };

  return (
    <div className={container()}>
      <div className={tabsContainer()}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
          />
        ))}
      </div>
      <div className={indicator()} style={indicatorStyle} />
    </div>
  );
};

export default Tabs;
