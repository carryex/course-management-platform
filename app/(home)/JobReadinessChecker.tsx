import Button from '@/components/Button';
import SectionContainer from './components/SectionContainer';
import SectionHeader from './components/SectionHeader';
import Image from 'next/image';
import { BsStars } from 'react-icons/bs';

const JobReadinessChecker = () => {
  return (
    <div className="w-full">
      <SectionContainer className="bg-state-50 grid-cols-1 gap-12 grid lg:grid-cols-2 lg:gap-16">
        <Image
          src="/job-readiness-checker.gif"
          width={1440}
          height={810}
          alt="job readiness checler"
        />
        <div className="flex flex-col">
          <div className="flex flex-row text-sm gap-2 font-mono pb-2">
            <BsStars className="self-center" />
            <span>Powered by AI</span>
          </div>
          <h2 className="text-5xl font-bold">
            <span className="mr-2">Job-readiness checker</span>
            <span className="border rounded-full border-gray-600 px-2 py-0 text-sm text-gray-500 relative -top-2 inline-block">
              Beta
            </span>
          </h2>

          <p className="text-base py-4">
            See how well your skills and experience match the job postings
            you’re interested in. Our job-readiness checker uses artificial
            intelligence to show you what you need to work on to qualify for a
            role.
          </p>
          <Button variant="outlined">Try it out</Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default JobReadinessChecker;
