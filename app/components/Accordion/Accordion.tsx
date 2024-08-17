'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { tv, VariantProps } from 'tailwind-variants';
import { baseAccordionStyles } from './Accordion.styles';

interface AccordionItemProps extends VariantProps<typeof baseAccordionStyles> {
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen = false,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>('0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  const {
    base,
    button,
    header,
    title: titleClass,
    icon,
    contentWrapper,
    content: contentClass,
  } = baseAccordionStyles({ open: isOpen });

  return (
    <div className={base()}>
      <button className={button()} onClick={onToggle}>
        <div className={header()}>
          <h3 className={titleClass()}>{title}</h3>
          <div className={icon()}>
            <FaAngleRight />
          </div>
        </div>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
          transition: 'max-height 0.3s ease',
        }}
        className={contentWrapper()}
      >
        <div className={contentClass()}>{content}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{ title: string; content: React.ReactNode }>;
  allowMultiple?: boolean; // Позволяет ли открывать несколько секций одновременно
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

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

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
