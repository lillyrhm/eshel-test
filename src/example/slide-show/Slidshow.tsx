import { SlideData } from '../../../assets/image/image/image';
import * as React from 'react';
import './slideshow.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function SlideShow({ slides }) {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    // console.log(current);
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    // console.log(current);
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (

    <section className=' slider'>
      <div className='inner-carousel'>

        {SlideData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slider slide active' : 'slider slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='natural' className='image ' />
              )}
            </div>
          )
        })}
      </div>

      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

    </section>
  )
}




