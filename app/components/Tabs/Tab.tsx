import React from 'react';
import { baseTabs } from './Tab.styles';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ label, isActive, onClick }, ref) => {
    const { button } = baseTabs({ isActive });
    return (
      <button ref={ref} className={button()} onClick={onClick}>
        {label}
      </button>
    );
  }
);

Tab.displayName = 'Tab';

export default Tab;
