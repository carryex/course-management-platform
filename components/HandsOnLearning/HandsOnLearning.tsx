'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Accordion from '../Accordion';
import { accordionContainerMock } from '../Accordion/Accordion.mock';

const HandsOnLearning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState([0]);

  return (
    <>
      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16">
        <div className="w-full lg:w-3/5">
          {accordionContainerMock[activeIndex[0]] && (
            <Image
              width={2880}
              height={1624}
              src={accordionContainerMock[activeIndex[0]].image}
              alt="text"
            />
          )}
        </div>
        <div className="w-full lg:w-2/5">
          <Accordion
            items={accordionContainerMock}
            variant="buttons"
            initialIndexes={[0]}
            onOpenIndexChange={(numbers) => setActiveIndex(numbers)}
          />
        </div>
      </div>
    </>
  );
};

export default HandsOnLearning;
