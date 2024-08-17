import Carousel from './components/Carousel';
import { slides } from './components/Carousel/Carousel.mock';
import AuthForm from './components/AuthForm';
import Quiz from './components/Quiz';
import Accordion from './components/Accordion';
import { accordionItems } from './components/Accordion/Accordion.mock';

export default function Home() {
  return (
    <main className="flex-col">
      <div className="flex flex-wrap lg:flex-nowrap flex-grow">
        {/* Блок с каруселью */}
        <div className="w-full lg:w-1/2">
          <Carousel slides={slides} />
        </div>

        {/* Блок с формой авторизации */}
        <div className="w-full lg:w-1/2 p-2 py-4 sm:py-6 justify-center md:py-8 lg:py-0 flex items-center lg:bg-transparent lg:ml-12 lg:justify-start">
          <AuthForm mode="signup" />
        </div>
      </div>
      <div className="w-full bg-slate-50 py-4">
        <Quiz />
      </div>
      <div className="w-full">
        <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-14 bg-gray-900">
          <p className="text-xl text-white text-center">Start Learning</p>
          <h2 className="text-4xl text-white text-center">Popular Courses</h2>
          <div className="pt-12">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="py-8 px-4 sm:px-6 md:px-10 lg:px-14 bg-gray-900">
          <p className="text-xl text-white text-center">The platform</p>
          <h2 className="text-4xl text-white text-center">Hands-on learning</h2>
        </div>
      </div>
    </main>
  );
}
