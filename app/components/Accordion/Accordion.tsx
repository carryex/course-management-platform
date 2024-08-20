'use client';
import React, { useEffect, useState } from 'react';
import AccordionSection from './AccordionSection';
import { baseAccordionStyles } from './Accordion.styles';

interface AccordionProps {
  items: Array<{ title: string; content: React.ReactNode }>;
  allowMultiple?: boolean; // Позволяет ли открывать несколько секций одновременно
  variant?: 'list' | 'buttons';
  onOpenIndexChange?: (indexes: number[]) => void;
  initialIndexes?: number[];
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  variant = 'list',
  onOpenIndexChange,
  initialIndexes = [0],
}) => {
  const { wrapper } = baseAccordionStyles({ variant });

  const [openIndexes, setOpenIndexes] = useState<number[]>(initialIndexes);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  useEffect(() => {
    onOpenIndexChange && onOpenIndexChange(openIndexes);
  }, [onOpenIndexChange, openIndexes]);

  return (
    <div className={wrapper()}>
      {items.map((item, index) => (
        <AccordionSection
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggleItem(index)}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default Accordion;
