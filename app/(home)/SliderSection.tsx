import Carousel from '@/components/Carousel';
import { slides } from '@/components/Carousel/Carousel.mock';

const SliderSection = () => {
  return (
    <div className="w-full lg:w-1/2">
      <Carousel slides={slides} />
    </div>
  );
};

export default SliderSection;
