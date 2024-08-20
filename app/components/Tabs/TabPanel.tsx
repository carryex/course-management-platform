import React from 'react';
import { baseTabs } from './Tab.styles';

interface TabPanelProps {
  children: React.ReactNode;
  isActive: boolean;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, isActive }) => {
  const { tabPanelContainer, contentContainer } = baseTabs({ isActive });
  return (
    <div className={tabPanelContainer()}>
      {isActive && <div className={contentContainer()}>{children}</div>}
    </div>
  );
};

export default TabPanel;
