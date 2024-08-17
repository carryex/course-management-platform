import Carousel from './components/Carousel';
import { slides } from './components/Carousel/Carousel.mock';
import AuthForm from './components/AuthForm';
import Quiz from './components/Quiz';

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
      <div className="w-full bg-slate-50">
        <Quiz />
      </div>
      <div className="w-full h-[200px]"></div>
    </main>
  );
}
