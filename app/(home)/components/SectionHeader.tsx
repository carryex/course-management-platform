import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="pb-8">
      <p className="text-xl text-white text-center">{subtitle}</p>
      <h2 className="text-4xl text-white text-center">{title}</h2>
    </div>
  );
};

export default SectionHeader;
