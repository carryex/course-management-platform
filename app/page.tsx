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
        <div className="w-full lg:w-1/2 p-2 py-4 sm:py-6 md:py-8 lg:py-0 flex items-center bg-gray-100 lg:bg-transparent lg:ml-12">
          <AuthForm mode="signup" />
        </div>
      </div>
      <div className="w-full">
        <Quiz />
      </div>
      <div className="w-full h-[200px] bg-zzz"></div>
    </main>
  );
}
