import { VariantProps } from 'tailwind-variants';
import { baseAccordionStyles } from './Accordion.styles';
import { useEffect, useRef, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface AccordionSectionProps
  extends VariantProps<typeof baseAccordionStyles> {
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  onToggle: () => void;
  variant?: 'list' | 'buttons';
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  content,
  isOpen = false,
  onToggle,
  variant = 'list',
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
  } = baseAccordionStyles({ open: isOpen, variant });

  const isList = variant === 'list';
  return (
    <div className={base()} onClick={onToggle}>
      <button className={button()}>
        <div className={header()}>
          <h3 className={titleClass()}>{title}</h3>
          {isList && (
            <div className={icon()}>
              <FaAngleRight />
            </div>
          )}
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

export default AccordionSection;
