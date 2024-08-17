'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

interface QuizStep {
  question: string;
  answers: string[];
  imageSrc: string;
}

const steps: QuizStep[] = [
  {
    question: 'What do you want to learn about?',
    answers: [
      'Web Development',
      'Data Science',
      'Computer Science',
      'Web Design',
      'Artificial Intelligence',
      'Machine Learning',
      'Game Development',
      'Mobile Development',
      'Data Visualization',
      'Not sure yet',
    ],
    imageSrc: '/slide1.png',
  },
  {
    question: 'What do you want to achieve?',
    answers: [
      'Switch careers',
      'Learn a skill for my job',
      'Build a project',
      'Learn for school',
      'Learn for fun',
      'Not sure yet',
    ],
    imageSrc: '/slide1.png',
  },
  {
    question: 'How much coding experience do you have?',
    answers: ['Beginner', 'Intermediate', 'Advanced'],
    imageSrc: '/slide1.png',
  },
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleAnswerClick = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col my-8 px-4">
      {/* Header */}
      <div className="text-left md:text-center">
        <h2 className="text-4xl font-bold mb-4">
          Find what&apos;s right for you
        </h2>
        <p className="mb-8 text-xl">
          Answer 3 quick questions to get recommendations that match your
          interests.
        </p>
      </div>

      {/* Main */}
      <div className="flex md:flex-row flex-col-reverse">
        {/* Navigation */}
        <div className="flex flex-row justify-center md:flex-col gap-2 mt-4 md:mt-0 md:justify-start md:mr-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`items-center justify-center flex w-8 h-8 rounded-full font-bold 
                ${index <= currentStep ? 'border-gray-900 text-gray-900 border-2' : 'border-gray-400 text-gray-400 border'}
                 ${index < currentStep && 'text-white bg-gray-900'}`}
            >
              {index < currentStep ? <FaCheck size={18} /> : index + 1}
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-grow">
          <div className="mb-4 text-xl font-semibold">
            {steps[currentStep].question}
          </div>
          <div className="flex flex-row gap-x-16">
            <div
              className={`${steps[currentStep].answers.length > 6 ? 'grid grid-cols-2' : ' flex flex-col'} gap-2 flex-grow`}
            >
              {steps[currentStep].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={handleAnswerClick}
                  className="p-4 border rounded-lg hover:bg-gray-200"
                >
                  {answer}
                </button>
              ))}
            </div>
            {/* <div className="flex flex-grow flex-col gap-y-2">
              {steps[currentStep].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={handleAnswerClick}
                  className="p-4 border rounded-lg hover:bg-gray-200"
                >
                  {answer}
                </button>
              ))}
            </div> */}
            {/* //md */}
            <div className="w-96 flex-col justify-center gap-8 items-center hidden lg:flex">
              <Image
                src={steps[currentStep].imageSrc}
                alt="Quiz Illustration"
                width={300}
                height={200}
              />
              <p className="text-center text-lg">
                We have hundreds of courses that cover just about everything.
              </p>
            </div>
          </div>
          {currentStep > 0 && (
            <button onClick={handleBackClick} className="text-blue-600 mt-4">
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
