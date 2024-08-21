import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
}) => {
  const classes = className.concat(' py-16 px-4 sm:px-6 md:px-10 lg:px-14');
  return <div className={classes}>{children}</div>;
};

export default SectionContainer;
