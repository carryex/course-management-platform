import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
}) => {
  const classes = className.concat(' py-16 px-4 sm:px-8 md:px-16 lg:px-24');
  return <div className={classes}>{children}</div>;
};

export default SectionContainer;
