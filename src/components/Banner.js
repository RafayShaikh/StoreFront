import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
  return (
    <div className='relative '>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <img loading='lazy' src='/mustang.jpg' alt='' />
        </div>
        <div>
          <img loading='lazy' src='/merc.jpg' alt='' />
        </div>
        <div>
          <img loading='lazy' src='/4runner.jpg' alt='' />
        </div>
        <div>
          <img loading='lazy' src='/camaro.jpg' alt='' />
        </div>
        <div>
          <img loading='lazy' src='/subaru.jpg' alt='' />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
