import React from 'react';
import Image from 'next/image';

interface ReviewCardProps {
  title: string;
  text: string;
  src: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ title, text, src }) => {
  return (
    <div className="flex flex-col">
      <Image src={src} width={800} height={800} alt={title} />
      <p className="font-semibold text-2xl pt-4 pb-2 text-gray-900">{title}</p>
      <p className="text-sm text-gray-900 font-mono">{text}</p>
    </div>
  );
};

export default ReviewCard;
